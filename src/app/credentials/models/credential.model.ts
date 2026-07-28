export interface Credential {
  id: string;

  title: string;
  issuer: string;
  issuedDate: string;

  icon?: string;
  logo?: string;

  category?: string;
  credentialUrl?: string;
}


export interface Profile {
  name: string;
  role: string;
  summary: string;
  skills: string[];
}