import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class Toolbar {

  // ✅ Inyección moderna
  private themeService = inject(ThemeService);

  // ✅ signal expuesto
  theme = this.themeService.theme;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}