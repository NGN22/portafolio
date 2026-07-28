import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class Toolbar {
  // Inject the ThemeService to access theme-related functionality
  private themeService = inject(ThemeService);
    
  readonly theme = this.themeService.theme;

  readonly menuOpen = signal(false);;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  
  }

}
