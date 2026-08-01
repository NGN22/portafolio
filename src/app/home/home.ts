import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_CONTENT } from './mocks/home.mock';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private languageService = inject(LanguageService);

  readonly language = this.languageService.language
  readonly aboutContent = HOME_CONTENT.about;

  readonly isExpanded = signal(false);

  getText = this.languageService.translate.bind(this.languageService);

  
  toggleAbout(){
    this.isExpanded.update((value) => !value);
  }

}
