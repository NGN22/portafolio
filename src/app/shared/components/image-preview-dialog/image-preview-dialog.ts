import { Component, inject } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ImagePreviewData } from '../../models/image-preview-data';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatableText } from '../../models/translatable-text.model';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
  standalone: true,
  selector: 'app-image-preview-dialog',
  styleUrl: './image-preview-dialog.scss',
  templateUrl: './image-preview-dialog.html',
})
export class ImagePreviewDialog {
  private readonly languageService = inject(LanguageService);
  private readonly dialogRef = inject(MatDialogRef<ImagePreviewDialog>);
  readonly data = inject<ImagePreviewData>(MAT_DIALOG_DATA);

  currentIndex = this.data.currentIndex;

  get currentEvidence() {
    return this.data.evidences[this.currentIndex];
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getText(text: TranslatableText): string {
    return this.languageService.translate(text);
  }

  next(): void {
    if (this.currentIndex < this.data.evidences.length - 1) {
      this.currentIndex++;
    }
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
