import { ProjectEvidence } from '../../projects/models/project.model';


export interface ImagePreviewData {

  evidence: ProjectEvidence;

  evidences: ProjectEvidence[];

  currentIndex: number;

}