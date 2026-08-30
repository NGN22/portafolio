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
  {
  id: 'maintenance-work-orders',

  acronym: 'MWM',

  title: {
    es: 'Gestión de Órdenes de Mantenimiento',
    en: 'Maintenance Work Orders Management',
  },

  summary: {
    es: 'Planificación, seguimiento y cierre de órdenes de mantenimiento.',
    en: 'Planning, tracking and closing maintenance work orders.',
  },

  description: {
    es: 'Aplicación desarrollada para gestionar el ciclo completo de las órdenes de mantenimiento. Permite registrar solicitudes, asignar responsables, controlar avances y documentar intervenciones realizadas sobre equipos e instalaciones.',

    en: 'Application developed to manage the full lifecycle of maintenance work orders. It allows registering requests, assigning technicians, tracking progress and documenting interventions on equipment and facilities.',
  },

  challenge: {
    es: 'La gestión de trabajos se realizaba mediante hojas de cálculo y correos electrónicos. Esto dificultaba el seguimiento de tareas, generaba duplicación de información y reducía la visibilidad del estado real de las intervenciones.',

    en: 'Work management relied on spreadsheets and emails. This made task tracking difficult, generated duplicated information and reduced visibility into the actual status of interventions.',
  },

  solution: {
    es: 'Se diseñó una aplicación centralizada que permite registrar solicitudes, asignar técnicos, actualizar estados en tiempo real y mantener un historial completo de cada intervención. La solución incorpora validaciones, filtros dinámicos y métricas operativas.',

    en: 'A centralized application was designed to register requests, assign technicians, update statuses in real time and maintain a complete intervention history. The solution includes validations, dynamic filters and operational metrics.',
  },

  lessonsLearned: {
    es: 'La implementación permitió profundizar en el manejo de Signals para gestión de estado, diseño de componentes reutilizables y optimización de experiencia de usuario en formularios complejos.',

    en: 'The implementation provided deeper experience with Signals for state management, reusable component design and user experience optimization for complex forms.',
  },

  technologies: [
    'Angular',
    'Signals',
    'Angular Material',
    'RxJS',
    'Node.js',
    'SQL Server',
  ],

  evidences: [
    {
      imageUrl:
        'assets/logos/Int_Cybersecurity.png',

      description: {
        es: 'Panel principal con indicadores de órdenes abiertas, pendientes y completadas.',

        en: 'Main dashboard showing open, pending and completed work order indicators.',
      },
    },

    {
      imageUrl:
        'assets/logos/AI_IBM.png',

      description: {
        es: 'Vista detallada de una orden con historial de actividades, responsables y documentación asociada.',

        en: 'Detailed work order view including activity history, assigned technicians and related documentation.',
      },
    },

    {
     
      description: {
        es: 'Reporte operativo para análisis de tiempos de resolución y cumplimiento de tareas.',

        en: 'Operational report for analyzing resolution times and task completion performance.',
      },
    },
  ],

  githubUrl:
    'https://github.com/example/maintenance-work-orders',

  demoUrl:
    'https://demo.example.com/maintenance-work-orders',

  documentationUrl:
    'https://docs.example.com/maintenance-work-orders',
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
