import { Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeSignal = signal<Theme>('light');
  theme = this.currentThemeSignal.asReadonly();

  init(): void {
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    const theme = savedTheme || this.getSystemTheme();

    this.applyTheme(theme);
  }



  toggleTheme(): void {
    const newTheme = this.currentThemeSignal() === 'light' ? 'dark' : 'light';

    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  private applyTheme(theme: Theme): void {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);

    this.currentThemeSignal.set(theme);

    console.log(`✅ Tema aplicado: ${theme}`);
  }

  private getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}
