import { TranslatableText } from '../../shared/models/translatable-text.model';
import { Project } from '../models/project.model';

export const PROJECTS_MOCK: Project[] = [

  /* AUTOMATIZACION VSAT - Sistema de Automatización de Configuración VSAT */
  {
    id: 'automatizacion-vsat',

    acronym: 'AVSAT',

    title: {
      es: 'Automatización de Configuración VSAT',
      en: 'VSAT Configuration Automation',
    },

    summary: {
      es: 'Automatización de configuración VSAT que redujo los tiempos operativos de 2 horas a 10 minutos por equipo (91% de mejora), eliminando errores manuales y estandarizando despliegues de red.',
      en: 'VSAT configuration automation that reduced operational time from 2 hours to 10 minutes per device (91% improvement), eliminating manual errors and standardizing network deployments.',
    },

    description: {
      es: 'Sistema de automatización orientado a operaciones de telecomunicaciones que permite generar y aplicar configuraciones de red para equipos VSAT utilizando información estructurada en Excel. La solución transforma datos operativos en parámetros técnicos válidos, ejecuta configuraciones mediante solicitudes HTTP y valida los resultados obtenidos. Gracias a su arquitectura modular, el sistema facilita la reutilización de componentes, el mantenimiento y la escalabilidad de futuras integraciones.',
      en: 'Automation system focused on telecommunications operations that generates and applies network configurations for VSAT devices using structured Excel data. The solution transforms operational information into valid technical parameters, executes configurations through HTTP requests, and validates the obtained results. Thanks to its modular architecture, the system promotes component reuse, maintainability, and future scalability.',
    },

    technologies: [
      'Python',
      'Pandas',
      'OpenPyXL',
      'Requests',
      'HTTP',
      'Excel',
      'Automation',
      'Telecommunications',
    ],

    imageUrl: 'assets/projects/1/automatizacionEnvio.webp',

    challenge: {
      es: 'La configuración manual de equipos VSAT demandaba varias horas por cada implementación, generando errores de tipeo, inconsistencias en parámetros y procesos repetitivos que afectaban la eficiencia operativa.',
      en: 'Manual VSAT device configuration required several hours for each deployment, generating typing mistakes, parameter inconsistencies, and repetitive processes that negatively impacted operational efficiency.',
    },

    solution: {
      es: 'Se desarrolló una herramienta modular capaz de extraer información desde hojas Excel, transformar automáticamente los datos en configuraciones técnicas válidas y enviarlas a los equipos mediante solicitudes HTTP. El sistema incorpora validaciones automáticas y visualización del resultado final para asegurar despliegues consistentes.',
      en: 'A modular tool was developed to extract information from Excel spreadsheets, automatically transform data into valid technical configurations, and deploy them to devices through HTTP requests. The system includes automatic validations and result visualization to ensure consistent deployments.',
    },

    lessonsLearned: {
      es: 'El proyecto permitió profundizar conocimientos en automatización de procesos, telecomunicaciones, integración de sistemas, manejo de datos con Python, diseño modular de software y optimización operativa mediante herramientas personalizadas.',
      en: 'This project enhanced knowledge in process automation, telecommunications, system integration, data processing with Python, modular software design, and operational optimization through custom-built tools.',
    },

    evidences: [

      {
        imageUrl: 'assets/projects/1/automatizacionEnvio.webp',
        description: {
          es: 'Transformación automática de parámetros operativos en configuraciones técnicas para equipos VSAT.',
          en: 'Automatic transformation of operational data into technical configurations for VSAT equipment.',
        },
      },
      {
        imageUrl: 'assets/projects/1/simulacionDeEnvio.webp',
        description: {
          es: 'Aplicación y validación de configuraciones mediante solicitudes HTTP.',
          en: 'Configuration deployment and validation through HTTP requests.',
        },
      },
      {
        imageUrl: 'assets/projects/1/simulacionDeEnvio2.webp',
        description: {
          es: 'Reducción del tiempo promedio de configuración de aproximadamente 2 horas a 10 minutos por equipo.',
          en: 'Configuration time reduction from approximately 2 hours to 10 minutes per device.',
        },
      },
    ],

    resources: [
      {
        type: 'github',
        url: 'https://github.com/NGN22/Automatizacion-Router',
        title: {
          es: 'Repositorio GitHub',
          en: 'GitHub Repository',
        },
        description: {
          es: 'Código fuente del sistema de automatización para configuración de equipos VSAT.',
          en: 'Source code of the VSAT configuration automation system.',
        },
      },
    ],
  },
  /**
   * GUADA - Sistema Automatizado de Seguimiento Astronómico y Astrofotografía
   */
  {
    id: 'guada-astronomical-tracking',

    acronym: 'GUADA',

    title: {
      es: 'Sistema Automatizado de Seguimiento Astronómico y Astrofotografía',
      en: 'Automated Astronomical Tracking and Astrophotography System',
    },

    summary: {
      es: 'Proyecto multidisciplinario que combina astronomía, sistemas embebidos, electrónica y procesamiento de imágenes para automatizar el seguimiento de astros y mejorar la captura de imágenes astronómicas mediante técnicas avanzadas de astrofotografía.',
      en: 'Multidisciplinary project combining astronomy, embedded systems, electronics, and image processing to automate celestial tracking and improve astronomical image acquisition through advanced astrophotography techniques.',
    },

    description: {
      es: 'GUADA es una plataforma experimental orientada a la automatización de observaciones astronómicas. El proyecto integra una montura ecuatorial mecanizada mediante Arduino, motores paso a paso, reloj de tiempo real DS3231 y persistencia en EEPROM para realizar seguimiento sideral utilizando coordenadas de Ascensión Recta (AR) y Declinación (DEC). Además, incorpora una línea de investigación y desarrollo en procesamiento digital de imágenes astronómicas, contemplando alineamiento, apilado, normalización, reducción de ruido y calibración utilizando Darks, Flats y Bias. La arquitectura fue diseñada para ejecutarse en hardware de recursos limitados como Raspberry Pi y sistemas Linux.',
      en: 'GUADA is an experimental platform focused on automating astronomical observations. The project integrates a motorized equatorial mount using Arduino, stepper motors, a DS3231 real-time clock, and EEPROM persistence to perform sidereal tracking using Right Ascension (RA) and Declination (DEC) coordinates. It also includes a research and development line in astronomical image processing, covering alignment, stacking, normalization, noise reduction, and calibration using Darks, Flats, and Bias frames. The architecture was designed to run on resource-constrained hardware such as Raspberry Pi and Linux systems.',
    },

    technologies: [
      'Arduino',
      'C++',
      'Python',
      'DS3231 RTC',
      'EEPROM',
      'I2C',
      'ULN2003',
      '28BYJ-48',
      'Stepper Motors',
      'Servo Motors',
      'Raspberry Pi',
      'Linux',
      'Pillow',
      'NumPy',
      'OpenCV',
      'Image Processing',
      'Computer Vision',
      'Embedded Systems',
      'Astronomy',
      'Astrophotography',
    ],



    challenge: {
      es: 'Desarrollar una solución integral capaz de compensar el movimiento aparente de la Tierra para realizar seguimiento automatizado de cuerpos celestes y, al mismo tiempo, investigar técnicas de procesamiento digital que permitan obtener imágenes astronómicas de mayor calidad en entornos con recursos limitados.',
      en: "Develop a complete solution capable of compensating for Earth's apparent motion to automatically track celestial objects while researching digital processing techniques to obtain higher-quality astronomical images under constrained computing resources.",
    },

    solution: {
      es: 'Se implementó una montura ecuatorial robotizada basada en Arduino con control independiente de los ejes de Ascensión Recta y Declinación. El sistema utiliza cálculos simplificados de hora sideral, reloj en tiempo real DS3231 y almacenamiento persistente en EEPROM para conservar la posición de observación. Complementariamente, se diseñó un pipeline de procesamiento de imágenes para astrofotografía capaz de realizar alineamiento, apilado, normalización de brillo, reducción de ruido y calibración automática utilizando marcos Dark, Flat, Bias y Dark Flat.',
      en: 'A robotic equatorial mount was developed using Arduino with independent control of the Right Ascension and Declination axes. The system uses simplified sidereal time calculations, a DS3231 real-time clock, and EEPROM persistence to preserve observation positioning. Additionally, an astrophotography processing pipeline was designed to perform alignment, stacking, brightness normalization, noise reduction, and automatic calibration using Dark, Flat, Bias, and Dark Flat frames.',
    },

    lessonsLearned: {
      es: 'El proyecto permitió integrar conocimientos de astronomía observacional, robótica, electrónica, programación embebida y procesamiento digital de imágenes. Se adquirió experiencia en coordenadas ecuatoriales, movimiento aparente de la esfera celeste, seguimiento sideral, control de motores paso a paso, optimización de memoria en microcontroladores y aplicación de técnicas avanzadas de astrofotografía como Drizzle, alineamiento automático, mejora de relación señal-ruido (SNR) y apilado estadístico.',
      en: 'This project combined observational astronomy, robotics, electronics, embedded programming, and digital image processing. It provided experience in equatorial coordinates, apparent celestial motion, sidereal tracking, stepper motor control, microcontroller memory optimization, and advanced astrophotography techniques such as Drizzle reconstruction, automatic alignment, signal-to-noise ratio (SNR) improvement, and statistical stacking.',
    },

    evidences: [
      {
        imageUrl: 'assets/projects/3/esfera.png',
        description: {
          es: 'Investigación y desarrollo de algoritmos de alineamiento de imágenes astronómicas.',
          en: 'Research and development of astronomical image alignment algorithms.',
        },
      },
      {
        imageUrl: 'assets/projects/3/Coordenadas_ecuatorialesAR.png',
        description: {
          es: 'Cálculo de hora sideral utilizando un módulo DS3231 para sincronización astronómica.',
          en: 'Sidereal time calculation using a DS3231 module for astronomical synchronization.',
        },
      },
      {
        imageUrl: 'assets/projects/3/stlMonturaPrueba.png',
        description: {
          es: 'Stl montura para Montura.',
          en: 'Stl mount for mount.',
        },
      },
      {
        imageUrl: 'assets/projects/3/refMontura.jpg',
        description: {
          es: 'Montura ecuatorial robotizada para seguimiento automático de objetos celestes.',
          en: 'Robotic equatorial mount for automatic celestial object tracking.',
        },
      },
      {
        imageUrl: 'assets/projects/3/Sky-Watcher_EQM-35_1.jpg',
        description: {
          es: 'Diseño conceptual de un sistema GoTo para posicionamiento automático de astros.',
          en: 'Conceptual design of a GoTo-style system for automatic celestial positioning.',
        },
      },
      {
        imageUrl: 'assets/projects/3/half1.gif',
        description: {
          es: 'Motor paso a paso.',
          en: 'Stepper motor.',
        },
      },
       {
        imageUrl: 'assets/projects/3/stepper.png',
        description: {
          es: 'Motor paso a paso.',
          en: 'Stepper motor.',
        },
      },

      {
        imageUrl: 'assets/projects/3/Schematic-of-Arduino-UNO-input-output-pins-and-Atmega328-pins-correspondence-Arduino.jpg.png',
        description: {
          es: 'Evaluación de arquitecturas de procesamiento para Raspberry Pi y sistemas Linux de bajos recursos.',
          en: 'Evaluation of processing architectures for Raspberry Pi and low-resource Linux systems.',
        },
      },
      {
        imageUrl: 'assets/projects/3/snr.png',
        description: {
          es: 'Implementación teórica de técnicas de apilado para aumentar la relación señal-ruido (SNR).',
          en: 'Theoretical implementation of stacking techniques to improve signal-to-noise ratio (SNR).',
        },
      },
    ],

    resources: [
      {
        type: 'github',
        url: 'https://github.com/NGN22/guada',
        title: {
          es: 'Repositorio GitHub',
          en: 'GitHub Repository',
        },
        description: {
          es: 'Código fuente del sistema de seguimiento astronómico y control de montura ecuatorial.',
          en: 'Source code for the astronomical tracking and equatorial mount control system.',
        },
      },
      {
        type: 'pdf',
        url: 'https://github.com/NGN22/guada/blob/master/Entendiendo%20el%20movimiento%20de%20los%20astros.pdf',
        title: {
          es: 'Entendiendo el Movimiento de los Astros',
          en: 'Understanding the Motion of Celestial Objects',
        },
        description: {
          es: 'Documento teórico sobre esfera celeste, coordenadas ecuatoriales, ascensión recta, declinación y movimiento aparente de los astros.',
          en: 'Theoretical document covering celestial sphere concepts, equatorial coordinates, right ascension, declination, and apparent celestial motion.',
        },
      },
      {
        type: 'pdf',
        url: 'https://github.com/NGN22/guada/blob/master/informeMecanizaci%C3%B3n%20del%20telescopio.pdf',
        title: {
          es: 'Informe de Mecanización del Telescopio',
          en: 'Telescope Mechanization Report',
        },
        description: {
          es: 'Análisis técnico de monturas ecuatoriales, selección de motores, cálculos de seguimiento sideral y desarrollo del prototipo automatizado.',
          en: 'Technical analysis of equatorial mounts, motor selection, sidereal tracking calculations, and development of the automated prototype.',
        },
      },
      {
        type: 'pdf',
        url: 'https://github.com/NGN22/guada/blob/master/Procesamiento%20de%20imagenes%20GUADA.pdf',
        title: {
          es: 'Procesamiento de Imágenes para Astrofotografía',
          en: 'Astrophotography Image Processing',
        },
        description: {
          es: 'Investigación sobre procesamiento digital de imágenes astronómicas que incluye alineamiento, apilado, reducción de ruido, mejora de SNR, calibración y optimización para ejecución secuencial en Raspberry Pi.',
          en: 'Research on astronomical image processing including alignment, stacking, noise reduction, SNR improvement, calibration, and optimization for sequential execution on Raspberry Pi.',
        },
      },
    ],
  },
  /*coverabilityTree*/
  {
    id: 'coverability-tree',
    acronym: 'CTPN',

    title: {
      es: 'Árbol de Cobertura para Redes de Petri',
      en: 'Petri Net Coverability Tree',
    },

    summary: {
      es: 'Implementación en Python del algoritmo de árbol de cobertura basado en las reglas de Tadao Murata para obtener todas las marcas alcanzables de una Red de Petri.',
      en: "Python implementation of a coverability tree algorithm based on Tadao Murata's rules to obtain all reachable markings of a Petri Net.",
    },

    description: {
      es: 'Aplicación desarrollada en Python para el análisis de Redes de Petri mediante la generación de árboles de cobertura. El sistema calcula las marcas alcanzables a partir de las matrices de entrada y salida de la red, permitiendo estudiar propiedades de comportamiento y alcanzabilidad. Además, incorpora una integración con Neo4j para representar gráficamente el árbol generado y visualizar las relaciones entre estados.',
      en: 'Python application developed for Petri Net analysis through coverability tree generation. The system computes reachable markings from the input and output matrices of the network, enabling behavior and reachability analysis. It also includes Neo4j integration to graphically represent the generated tree and visualize relationships between states.',
    },

    technologies: ['Python', 'NumPy', 'Neo4j', 'Graph Theory', 'Petri Nets'],

    imageUrl: '/projects/coverability-tree/main.png',

    challenge: {
      es: 'Implementar las reglas teóricas propuestas por Tadao Murata para analizar Redes de Petri y determinar todas las marcas alcanzables, incluyendo casos con crecimiento infinito y estructuras complejas.',
      en: 'Implement the theoretical rules proposed by Tadao Murata to analyze Petri Nets and determine all reachable markings, including infinite growth cases and complex structures.',
    },

    solution: {
      es: 'Se desarrolló un algoritmo en Python capaz de procesar las matrices de entrada y salida de una Red de Petri, generar automáticamente el árbol de cobertura y visualizar los resultados mediante Neo4j utilizando relaciones jerárquicas entre los nodos del árbol.',
      en: 'A Python-based algorithm was developed to process Petri Net input and output matrices, automatically generate the coverability tree, and visualize results through Neo4j using hierarchical relationships between tree nodes.',
    },

    lessonsLearned: {
      es: 'El proyecto fortaleció conocimientos en modelado matemático, teoría de Redes de Petri, algoritmos de análisis de estados, estructuras de grafos y visualización de datos mediante bases orientadas a grafos.',
      en: 'This project strengthened knowledge in mathematical modeling, Petri Net theory, state-space analysis algorithms, graph structures, and graph-database-based visualization.',
    },

    evidences: [
      {
        imageUrl: 'https://github.com/NGN22/coverabilitytree/raw/master/graph.svg',
        description: {
          es: 'Visualización del árbol de cobertura generado para una Red de Petri utilizando Neo4j.',
          en: 'Visualization of the generated coverability tree for a Petri Net using Neo4j.',
        },
      },
    ],

    resources: [
      {
        type: 'github',
        url: 'https://github.com/NGN22/coverabilitytree',
        title: {
          es: 'Repositorio GitHub',
          en: 'GitHub Repository',
        },
        description: {
          es: 'Código fuente completo del proyecto.',
          en: 'Complete source code of the project.',
        },
      },
      {
        type: 'pdf',
        url: 'https://github.com/NGN22/coverabilitytree/blob/master/Presentación%20proyecto.pdf',
        title: {
          es: 'Presentación del Proyecto',
          en: 'Project Presentation',
        },
        description: {
          es: 'Documento con fundamentos teóricos, ejemplos y descripción de la herramienta.',
          en: 'Document containing theoretical background, examples, and tool description.',
        },
      },
    ],
  },
  /*laboratorio-gestion-integral*/ {
    id: 'laboratorio-gestion-integral',

    acronym: 'Laboratorio de Gestión Integral',

    title: {
      es: 'Laboratorio de Gestión Integral',
      en: 'Laboratory of Comprehensive Management',
    },

    summary: {
      es: 'Software de gestión integral desarrollado para el laboratorio CESyMA de la UNSAM, orientado a la administración de proyectos, bioterios, recursos, espacios y procesos administrativos de investigación.',
      en: 'Comprehensive management software developed for the CESyMA laboratory at UNSAM, focused on managing research projects, animal facilities, resources, workspaces, and administrative processes.',
    },

    description: {
      es: 'Laboratorio de Gestión Integral es una plataforma desarrollada por estudiantes de la Tecnicatura en Programación de la UNSAM para cubrir necesidades específicas del laboratorio CESyMA. El sistema centraliza la gestión de investigaciones, usuarios, bioterios, espacios y procesos administrativos, proporcionando herramientas que mejoran la organización, la trazabilidad de la información y la colaboración entre equipos científicos.',
      en: 'Laboratory of Comprehensive Management is a platform developed by students of the Programming Technician degree at UNSAM to address specific needs of the CESyMA laboratory. The system centralizes the management of research projects, users, animal facilities, workspaces, and administrative processes, improving organization, information traceability, and collaboration among scientific teams.',
    },

    technologies: [
      'Python',
      'MongoDB',
      'Angular',
      'TypeScript',
      'MySQL',
      'Docker',
      'Git',
      'GitHub',
    ],

    imageUrl: '/projects/inmunobio/inmunobio-home.png',

    challenge: {
      es: 'El laboratorio CESyMA requería una solución centralizada para gestionar investigaciones, espacios físicos, documentación, proyectos, usuarios, bioterios y procesos administrativos. La información se encontraba distribuida entre distintos actores y procesos, dificultando la organización y el seguimiento.',
      en: 'The CESyMA laboratory required a centralized solution for managing research activities, physical spaces, documentation, projects, users, animal facilities, and administrative processes. Information was distributed among different actors and workflows, making organization and tracking difficult.',
    },

    solution: {
      es: 'Se diseñó y desarrolló una plataforma modular capaz de gestionar proyectos, usuarios, bioterios, recursos y facturación. El equipo trabajó utilizando diagramas DTIU, casos de uso documentados y metodologías de análisis para modelar la solución antes de implementar el sistema.',
      en: 'A modular platform was designed and developed to manage projects, users, animal facilities, resources, and billing processes. The team used DTIU diagrams, documented use cases, and analysis methodologies to model the solution before implementing the system.',
    },

    lessonsLearned: {
      es: 'El proyecto permitió adquirir experiencia en levantamiento de requerimientos reales, trabajo interdisciplinario con investigadores, modelado de sistemas mediante casos de uso, diseño de interfaces, arquitectura cliente-servidor y organización de equipos frontend y backend.',
      en: 'The project provided experience in real-world requirements gathering, interdisciplinary collaboration with researchers, system modeling through use cases, interface design, client-server architecture, and frontend/backend team organization.',
    },

    evidences: [
      {
        imageUrl: 'assets/projects/2/casosDeUso.png',
        description: {
          es: 'Template de casos.',
          en: 'Use case template.',
        },
      },
      {
        imageUrl: 'assets/projects/2/casosDeUso.gif',
        description: {
          es: 'Documentación de más de 37 casos de uso para las distintas funcionalidades del sistema.',
          en: 'Documentation of more than 37 use cases covering the different system functionalities.',
        },
      },
      {
        imageUrl: 'assets/projects/2/DTIU.gif',
        description: {
          es: 'Diagramas de transición entre interfaces de usuario utilizados para modelar la navegación del sistema.',
          en: 'User Interface Transition Diagrams used to model system navigation.',
        },
      },
      {
        imageUrl: 'assets/projects/2/modulos.gif',
        description: {
          es: 'Módulos principales: Gestión de Espacios, Gestión de Usuarios y Proyectos, Bioterio y Facturación.',
          en: 'Main modules: Space Management, User and Project Management, Animal Facility Management, and Billing.',
        },
      },
      {
        imageUrl: 'assets/projects/2/contenedores.gif',
        description: {
          es: 'Contenedores, bases de datos utilizados para almacenar la información del sistema.',
          en: 'Containers and databases used to store system information.',
        },
      },
    ],

    resources: [
      {
        type: 'github',
        url: 'https://github.com/gaabicarp/Inmunobio-backend',
        title: {
          es: 'Repositorio Backend',
          en: 'Backend Repository',
        },
        description: {
          es: 'Código fuente de la API y lógica de negocio.',
          en: 'Source code for the API and business logic.',
        },
      },
      {
        type: 'github',
        url: 'https://github.com/gaabicarp/Inmunobio-frontend',
        title: {
          es: 'Repositorio Frontend',
          en: 'Frontend Repository',
        },
        description: {
          es: 'Interfaz de usuario y componentes de la aplicación.',
          en: 'User interface and application components.',
        },
      },
    ],
  },
  {
    id: 'multimedia-content-management',

    acronym: 'MCMS',

    title: {
      es: 'Sistema de Gestión de Contenidos Multimedia',
      en: 'Multimedia Content Management System',
    },

    summary: {
      es: 'Trabajo Práctico Final de Base de Datos y Desarrollo Full Stack que implementa una plataforma para administrar contenidos multimedia, reproducciones, descargas, comentarios y métricas de interacción de usuarios.',
      en: 'Final Database and Full Stack Development project implementing a platform to manage multimedia content, downloads, playback sessions, comments, and user interaction metrics.',
    },

    description: {
      es: 'Aplicación web desarrollada bajo una arquitectura cliente-servidor utilizando Angular, Node.js y MySQL. El sistema permite administrar contenidos multimedia clasificados por categorías, gestionar archivos descargables y reproducibles, registrar reproducciones y descargas realizadas por los usuarios, almacenar comentarios y respuestas, y generar información de retroalimentación mediante encuestas de satisfacción. Como parte del proyecto se diseñó un modelo relacional completo, procedimientos almacenados y reglas de integridad referencial para garantizar consistencia en la información.',
      en: 'Web application developed using a client-server architecture with Angular, Node.js, and MySQL. The system manages categorized multimedia content, downloadable and playable resources, user downloads and playback sessions, comments and replies, and feedback through satisfaction surveys. The project included the design of a complete relational model, stored procedures, and referential integrity rules to ensure data consistency.',
    },

    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'JavaScript',
      'MySQL',
      'SQL',
      'MySQL Workbench',
      'REST API',
      'HTML',
      'CSS',
      'Full Stack Development',
    ],

    imageUrl: '/projects/mcms/main.png',

    challenge: {
      es: 'Diseñar una solución integral capaz de administrar diferentes tipos de contenido multimedia manteniendo relaciones complejas entre usuarios, categorías, reproducciones, descargas, comentarios y encuestas. El desafío principal consistió en modelar correctamente la base de datos y garantizar la integridad de la información entre todas las entidades.',
      en: 'Design a comprehensive solution capable of managing different types of multimedia content while maintaining complex relationships between users, categories, downloads, playback sessions, comments, and surveys. The main challenge was building a robust relational model and ensuring data integrity across all entities.',
    },

    solution: {
      es: 'Se desarrolló una plataforma Full Stack basada en Angular y Node.js que consume una base de datos MySQL normalizada. El sistema implementa operaciones CRUD completas para contenidos, categorías y usuarios, además de registrar estadísticas de uso mediante reproducciones, descargas y encuestas. También se desarrollaron procedimientos almacenados para automatizar la creación y clasificación de contenidos.',
      en: 'A Full Stack platform based on Angular and Node.js was developed on top of a normalized MySQL database. The system implements complete CRUD operations for content, categories, and users while tracking usage statistics through downloads, playback sessions, and surveys. Stored procedures were also created to automate content creation and classification.',
    },

    lessonsLearned: {
      es: 'El proyecto permitió aplicar conceptos avanzados de modelado relacional, normalización de bases de datos, claves foráneas, procedimientos almacenados, arquitectura cliente-servidor y desarrollo Full Stack. También brindó experiencia práctica en diseño de APIs, persistencia de datos y administración de relaciones complejas entre entidades.',
      en: 'The project provided hands-on experience with advanced relational modeling, database normalization, foreign keys, stored procedures, client-server architecture, and Full Stack development. It also strengthened skills in API design, data persistence, and managing complex entity relationships.',
    },

    resources: [
      {
        type: 'github',
        url: 'https://github.com/NGN22/AngularServerBaseDatos',
        title: {
          es: 'Repositorio GitHub',
          en: 'GitHub Repository',
        },
        description: {
          es: 'Código fuente del trabajo.',
          en: 'Source code of the project.',
        },
      },
    ],
  },

  /** */
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
