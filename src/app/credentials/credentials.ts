import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { Credential } from './models/credential.model';
import { CREDENTIALS_MOCK, PROFILE_MOCK} from './mocks/credentials.mock'



@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDividerModule, MatChipsModule],
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss',
})
export class CredentialsComponent {
  
  readonly profile = PROFILE_MOCK;
  readonly credentials: Credential[] = CREDENTIALS_MOCK;
  
}

