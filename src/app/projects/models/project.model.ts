import { TranslatableText } from '../../shared/models/translatable-text.model';

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

  githubUrl?: string;

  demoUrl?: string;

  documentationUrl?: string;
}




