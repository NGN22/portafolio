import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  init(): void {
    const icons = [
      { name: 'github_black', path: 'assets/logos/GitHub_Invertocat_Black.svg' },
      { name: 'linkedin_black', path: 'assets/logos/InBug-Black.svg' },
      { name: 'galaga', path: 'assets/logos/Galaga.svg'},
      { name: 'rocket', path: 'assets/logos/rocket.svg'}
     
    ];

    icons.forEach(icon => {
      // Angular Material automatically sanitizes static asset paths
      // No need for bypassSecurityTrustResourceUrl for local assets
      this.iconRegistry.addSvgIcon(icon.name, icon.path);
    });
  }
}