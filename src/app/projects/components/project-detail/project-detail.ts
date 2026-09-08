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
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImagePreviewDialog } from '../../../shared/components/image-preview-dialog/image-preview-dialog';
import { ProjectEvidence, ProjectResourceType } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatDividerModule, MatIconModule,],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private languageService = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  readonly projectId = this.route.snapshot.paramMap.get('id');
  readonly project = PROJECTS_MOCK.find(
    (project) => project.id === this.projectId,
  );
  private readonly dialog = inject(MatDialog);

  getText(text: TranslatableText): string {
    return this.languageService.translate(text);
  }

  goBack(): void {
    this.location.back();
  }

  openEvidence(evidence: ProjectEvidence, index: number): void {
    this.dialog.open(ImagePreviewDialog, {
      data: {
        evidence,
        evidences: this.project?.evidences ?? [],
        currentIndex: index,
      },

      width: '95vw',
      maxWidth: '900px',

      maxHeight: '90vh',
      panelClass: 'image-preview-dialog-panel',
    });
  }

  getResourceIcon(type: ProjectResourceType): string {
    switch (type) {
      case 'github':
        return 'github_black';

      case 'demo':
        return 'public';

      case 'pdf':
        return 'picture_as_pdf';

      case 'paper':
        return 'article';

      case 'documentation':
        return 'menu_book';

      default:
        return 'link';
    }
  }
}
