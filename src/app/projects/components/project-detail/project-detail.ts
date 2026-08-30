import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS_MOCK } from '../../mocks/projects.mock';
import { LanguageService } from '../../../shared/services/language.service';
import { TranslatableText } from '../../../shared/models/translatable-text.model';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
    private languageService = inject(LanguageService);
    private readonly route = inject(ActivatedRoute);
    private readonly location = inject(Location);
    readonly projectId = this.route.snapshot.paramMap.get('id');
    readonly project = PROJECTS_MOCK.find((project) => project.id === this.projectId);


    
    getText(text: TranslatableText): string {
        return this.languageService.translate(text);
    }

    goBack(): void {
        this.location.back();
    }

  }
