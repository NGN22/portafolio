import { TranslatableText } from "../../shared/models/translatable-text.model";

export interface Credential {
  id: string;


  title: TranslatableText;
  issuer: string;
  issuedDate: string;

  icon?: string;
  logo?: string;

  category?: TranslatableText;
  credentialUrl?: string;
}


export interface Profile {
  name: string;
  role: TranslatableText;
  title: TranslatableText;
  education: TranslatableText;
  skills: TranslatableText[];

}

