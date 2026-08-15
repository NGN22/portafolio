import { TranslatableText } from '../../shared/models/translatable-text.model';

export interface Project {
  /**
   * Identificador único utilizado para routing.
   * Ej: /projects/crm-management
   */
  id: string;

  /**
   * Acrónimo o identificador visual.
   * Se utilizará cuando no exista imagen.
   * Ej: CRM, ERP, WMS, BI
   */
  acronym: string;

  /**
   * Nombre del proyecto.
   */
  title: TranslatableText;

  /**
   * Descripción corta para la tarjeta.
   */
  summary: TranslatableText;

  /**
   * Descripción completa para la vista detalle.
   */
  description: TranslatableText;

  /**
   * Tecnologías principales utilizadas.
   */
  technologies: string[];

  /**
   * Imagen principal opcional.
   */
  imageUrl?: string;
}