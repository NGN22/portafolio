import { TranslatableText } from '../../shared/models/translatable-text.model';
import { Project } from '../models/project.model';

export const PROJECTS_MOCK: Project[] = [
  {
    id: 'crm-management',

    acronym: 'CRM',

    title: {
      es: 'Sistema de Gestión Comercial',
      en: 'Commercial Management System',
    },

    summary: {
      es: 'Administración de clientes, ventas y oportunidades comerciales.',
      en: 'Customer, sales and opportunity management.',
    },

    description: {
      es: 'Aplicación empresarial desarrollada para gestionar clientes, oportunidades comerciales, procesos de venta y seguimiento de actividad. Permite centralizar la información comercial y optimizar el flujo de trabajo de los equipos de ventas.',

      en: 'Enterprise application developed to manage customers, business opportunities, sales processes and activity tracking. It centralizes commercial information and streamlines sales team workflows.',
    },

    technologies: ['Angular', 'Angular Material', 'RxJS', 'Node.js'],
  },

  {
    id: 'inventory-management',

    acronym: 'WMS',

    title: {
      es: 'Sistema de Gestión de Inventario',
      en: 'Inventory Management System',
    },

    summary: {
      es: 'Control de stock, movimientos de almacén y trazabilidad.',
      en: 'Stock control, warehouse operations and traceability.',
    },

    description: {
      es: 'Solución orientada a la administración de inventarios, diseñada para registrar ingresos, egresos, transferencias y auditorías de stock. Incluye herramientas de trazabilidad y control operativo.',

      en: 'Inventory management solution designed to handle stock entries, exits, transfers and audits. Includes traceability tools and operational controls.',
    },

    technologies: ['Angular', 'Signals', 'Angular Material', 'SQL Server'],
  },

  {
    id: 'business-analytics',

    acronym: 'BI',

    title: {
      es: 'Dashboard Analítico',
      en: 'Analytics Dashboard',
    },

    summary: {
      es: 'Visualización de métricas e indicadores clave de negocio.',
      en: 'Business metrics and KPI visualization.',
    },

    description: {
      es: 'Plataforma orientada al análisis de información mediante dashboards interactivos. Permite monitorear indicadores, tendencias y métricas estratégicas para la toma de decisiones.',

      en: 'Platform focused on data analysis through interactive dashboards. Enables monitoring of KPIs, trends and strategic metrics for decision-making.',
    },

    technologies: ['Angular', 'RxJS', 'REST API', 'Chart.js'],
  },
];

export const PROJECTS_CONTENT = {
  descripcion: {
    es: `
    Desarrollos técnicos y personales: práctica profesional y formación constante`,
    en: `
    Technical and personal developments: professional practice and continuous learning.`,
  } satisfies TranslatableText,

  title: {
    es: 'Proyectos',
    en: 'Projects',
  } satisfies TranslatableText,
};
