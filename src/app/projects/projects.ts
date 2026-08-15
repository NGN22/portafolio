import { Component, inject, signal } from '@angular/core';

import { PROJECTS_CONTENT, PROJECTS_MOCK } from './mocks/projects.mock';
import { Project } from './models/project.model';

import { ProjectCardComponent } from './components/project-card/project-card';

import { LanguageService } from '../shared/services/language.service';
import { TranslatableText } from '../shared/models/translatable-text.model';





@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  private languageService = inject(LanguageService);

  readonly projects = signal<Project[]>(PROJECTS_MOCK);
  readonly language = this.languageService.language
  readonly title = PROJECTS_CONTENT.title;
  readonly descripcion = PROJECTS_CONTENT.descripcion;

  getText(text: TranslatableText): string {
    return this.languageService.translate(text);
  }


}
