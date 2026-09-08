import { TranslatableText } from '../../shared/models/translatable-text.model';
/* Galeria de evidencias */
export interface ProjectEvidence {
  imageUrl?: string;

  description?: TranslatableText;
}

export interface Project {
  id: string;

  acronym: string;

  title: TranslatableText;

  summary: TranslatableText;

  description: TranslatableText;

  technologies: string[];

  imageUrl?: string;

  challenge?: TranslatableText;

  solution?: TranslatableText;

  lessonsLearned?: TranslatableText;

  evidences?: ProjectEvidence[];

  resources?: ProjectResource[];
}


/** Recursos de proyecto **/
export type ProjectResourceType =
  | 'github'
  | 'demo'
  | 'pdf'
  | 'paper'
  | 'documentation'
  | 'link';

export interface ProjectResource {
  type: ProjectResourceType;

  url: string;

  title: TranslatableText;

  description?: TranslatableText;
}
