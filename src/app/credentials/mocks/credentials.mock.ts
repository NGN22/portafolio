import { Credential } from '../models/credential.model';
import { signal } from '@angular/core';
import { Profile } from '../models/credential.model';
import { TranslatableText } from '../../shared/models/translatable-text.model';

export const CREDENTIALS: Credential[] = [
  {
    id: 'ccst-cybersecurity',

    title: {
      es: 'Técnico en Ciberseguridad por Cisco',
      en: 'Cisco Certified Support Technician Cybersecurity',
    },
    issuer: 'Cisco',
    issuedDate: '05/2031',

    logo: 'assets/logos/CCST.png',

    credentialUrl:
      'https://www.credly.com/badges/6b80ea17-9681-43ce-bf7f-cabf692bab83',
  },
  {
    id: 'networking-basics',
    title: { es: 'Fundamentos de Redes', en: 'Networking Basics' },
    issuer: 'Cisco',
    issuedDate: '04/2026',
    logo: 'assets/logos/Networking_Basic.png',
    credentialUrl:
      'https://www.credly.com/badges/2143394b-7c30-49f4-a023-4168667129a0',
  },
  {
    id: 'intro-cybersecurity',
    title: {
      es: 'Introducción a la Ciberseguridad',
      en: 'Introduction to Cybersecurity',
    },
    issuer: 'Cisco',
    issuedDate: '03/2026',
    logo: 'assets/logos/Int_Cybersecurity.png',
    credentialUrl:
      'https://www.credly.com/badges/6dbb9f61-5562-46f6-aa3f-4ef324171854',
  },
  {
    id: 'ms-security-compliance',
    title: {
      es: 'Fundamentos de Seguridad, Cumplimiento e Identidad',
      en: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    },
    issuer: 'Microsoft',
    issuedDate: '03/2026',
    logo: 'assets/logos/Security_Compiance_Identity.png',
    credentialUrl:
      'https://www.credly.com/badges/a65a83a0-52d2-4114-9f64-879000aa17e3',
  },
  {
    id: 'ms-azure-ai',
    title: {
      es: 'Fundamentos de IA en Azure',
      en: 'Microsoft Certified: Azure AI Fundamentals',
    },
    issuer: 'Microsoft',
    issuedDate: '03/2026',
    logo: 'assets/logos/Azure_AI.png',
    credentialUrl:
      'https://www.credly.com/badges/bb393f85-6ab7-4b60-88b9-97aff15c8afd',
  },
  {
    id: 'ibm-cybersecurity-fundamentals',
    title: {
      es: 'Fundamentos de Ciberseguridad',
      en: 'Cybersecurity Fundamentals',
    },
    issuer: 'IBM SkillsBuild',
    issuedDate: '02/2026',
    logo: 'assets/logos/Cybersecuruty_IBM.png',
    credentialUrl:
      'https://www.credly.com/badges/919faff8-ebd7-46f0-99d5-ea72d2288488',
  },
  {
    id: 'ibm-ai-fundamentals',
    title: {
      es: 'Fundamentos de Inteligencia Artificial',
      en: 'Artificial Intelligence Fundamentals',
    },
    issuer: 'IBM SkillsBuild',
    issuedDate: '01/2026',
    logo: 'assets/logos/AI_IBM.png',
    credentialUrl:
      'https://www.credly.com/badges/4546581a-8525-4789-9051-2866f5a7f265',
  },
];

export const PUBLICATION: Credential[] = [
  {
    id: 'publication-1',
    title: {
      es: 'Primer enfoque al apilamiento de imágenes usando un Computadora de Placa Única',
      en: 'First approach to image stacking using a Single-Board Computer',
    },

    issuer: 'IEEE',
    issuedDate: '2018',
    icon: 'token',
    credentialUrl: 'https://ieeexplore.ieee.org/document/8584353',
  },
];

export const EDUCATION: Credential[] = [
  {
    id: 'education-1',
    title: {
      es: 'Técnico Universitario en Programación Informática',
      en: 'University Technician in Computer Programming',
    },
    issuer: 'Universidad Nacional de San Martín (UNSAM)',
    issuedDate: 'Graduado',
    icon: '',
    credentialUrl:
      'https://www.unsam.edu.ar/escuelas/ecyt/107/ciencia/programacion-informatica',
  },
  {
    id: 'education-2',
    title: {
      es: 'Lic. en Análisis de Sistemas',
      en: 'Bachelor in System Analysis',
    },
    issuer: 'Facultad de Ingeniería de la Universidad de Buenos Aires (FIUBA)',
    issuedDate: 'in Progress',
    icon: '',
    credentialUrl:
      'https://www.fi.uba.ar/grado/carreras/lic-en-analisis-de-sistemas',
  },
];

export const PROFILE_MOCK: Profile = {
  name: 'Nadia Nohely Gonzalez',
  role: { es: 'Ingenieria de Software', en: 'Software Engineer' },
  title: { es: 'Formación Académica', en: 'Academic Background' },
  education: {
    es: 'Ingeniera de software con experiencia en liderazgo de proyectos tecnológicos, desarrollo backend e integración de sistemas para entornos académicos, científicos y de investigación. Combina experiencia técnica, coordinación de equipos y formación continua en inteligencia artificial, ciberseguridad y analítica de datos.',
    en: 'Software engineer with experience in leading technology projects, backend development, and systems integration for academic, scientific, and research environments. Combines technical expertise, team coordination, and continuous learning in artificial intelligence, cybersecurity, and data analytics.',
  },
  skills: [
    {
      es: 'Backend Development',
      en: 'Backend Development',
    },
    {
      es: 'Automatización',
      en: 'Automation',
    },
    {
      es: 'Systems Integration',
      en: 'Systems Integration',
    },
    {
      es: 'Resolución de Problemas',
      en: 'Troubleshooting',
    },
  ],
};

export const CREDENTIALS_CONTENT = {
  about: {
    es: `
    Certificaciones profesionales, formación técnica y adicionales para un aprendizaje continuo.
    `,

    en: `
    Professional certifications, technical training, and additional training for continuous learning.
    `,
  } satisfies TranslatableText,

  titulo: {
    es: 'Educación, Certificaciones & Publicaciones',
    en: 'Education, Certifications & Publications',
  } satisfies TranslatableText,

  certificationTitle: {
    es: 'Certificaciones',
    en: 'Certifications',
  } satisfies TranslatableText,

  educationTitle: {
    es: 'Educación',
    en: 'Education',
  } satisfies TranslatableText,

  publicationTitle: {
    es: 'Publicaciones',
    en: 'Publications',
  } satisfies TranslatableText,
};
