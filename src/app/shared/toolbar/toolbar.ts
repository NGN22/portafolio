import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { MatMenuModule } from '@angular/material/menu';
import { UI_CONTENT } from '../content/ui_conten';
import { TranslatableText } from '../models/translatable-text.model';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class Toolbar {
  // Inject the ThemeService to access theme-related functionality
  private themeService = inject(ThemeService);

  // Inject the LanguageService to access language-related functionality
  private languageService = inject(LanguageService);

  readonly theme = this.themeService.theme;

  readonly language = this.languageService.language;

  readonly menuOpen = signal(false);

  readonly ui = UI_CONTENT;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  getText(text: TranslatableText): string {
  return this.languageService.translate(text);
}

}
