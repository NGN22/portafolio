import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';

import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { LanguageService } from '../../../shared/services/language.service';
import { Project } from '../../models/project.model';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {

  readonly project =
    input.required<Project>();

  private readonly languageService =
    inject(LanguageService);

  private readonly router =
    inject(Router);

  readonly title = computed(() =>
    this.languageService.translate(
      this.project().title
    )
  );

  readonly summary = computed(() =>
    this.languageService.translate(
      this.project().summary
    )
  );

  navigateToProject(): void {

    this.router.navigate([
      '/projects',
      this.project().id,
    ]);

  }
}