import { Injectable, signal } from '@angular/core';

import { Language } from '../models/translatable-text.model';
import { TranslatableText } from '../models/translatable-text.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  private readonly STORAGE_KEY = 'language';

  private currentLanguageSignal = signal<Language>('es');

  language = this.currentLanguageSignal.asReadonly();

  init(): void {

    const savedLanguage =
      localStorage.getItem(this.STORAGE_KEY) as Language | null;

    const language = savedLanguage ?? 'es';

    this.currentLanguageSignal.set(language);
  }

  setLanguage(language: Language): void {

    this.currentLanguageSignal.set(language);

    localStorage.setItem(
      this.STORAGE_KEY,
      language
    );
  }

  toggleLanguage(): void {

    const newLanguage =
      this.language() === 'es'
        ? 'en'
        : 'es';

    this.setLanguage(newLanguage);
    console.log(`Language changed to: ${newLanguage}`);
  }

  translate(text: TranslatableText): string {

    const currentLanguage = this.language();

    return text[currentLanguage];
  }

  isSpanish(): boolean {
    return this.language() === 'es';
  }

  isEnglish(): boolean {
    return this.language() === 'en';
  }
}