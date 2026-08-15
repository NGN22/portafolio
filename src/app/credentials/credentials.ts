import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { Credential } from './models/credential.model';
import { CREDENTIALS_CONTENT, CREDENTIALS, PROFILE_MOCK, EDUCATION, PUBLICATION} from './mocks/credentials.mock'
import { LanguageService } from '../shared/services/language.service';
import { TranslatableText } from '../shared/models/translatable-text.model';



@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDividerModule, MatChipsModule],
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss',
})
export class CredentialsComponent {
  
  private readonly languageService = inject(LanguageService);
  readonly profile = PROFILE_MOCK;
  readonly credentials: Credential[] = CREDENTIALS;
  readonly education: Credential[] = EDUCATION;
  readonly publication: Credential[] = PUBLICATION;

  readonly about = CREDENTIALS_CONTENT.about;
  readonly titulo = CREDENTIALS_CONTENT.titulo;
  readonly certificationTitle = CREDENTIALS_CONTENT.certificationTitle;  
  readonly educationTitle = CREDENTIALS_CONTENT.educationTitle; 
  readonly publicationTitle = CREDENTIALS_CONTENT.publicationTitle; 
 
 
  getText(text: TranslatableText): string {
  return this.languageService.translate(text);
}
  
}

