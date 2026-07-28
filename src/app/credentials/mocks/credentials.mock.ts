import { Credential } from "../models/credential.model";
import {  signal } from '@angular/core';
import { Profile } from "../models/credential.model";

export const CREDENTIALS_MOCK: Credential[] = [
  {
    id: 'aws-cloud-practitioner',

    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuedDate: 'January 2025',

    icon: 'workspace_premium',
    logo: 'assets/logos/GitHub_Invertocat_Black.png',
  },
  {
    id: 'angular-advanced',

    title: 'Angular Advanced',
    issuer: 'Udemy',
    issuedDate: 'June 2024',

    icon: 'school',
  },
];


export const PROFILE_MOCK: Profile =  {
    name: 'German Ignacio Garcia',
    role: 'Maintenance Technician',
    summary:
      'Technical professional with experience in maintenance, troubleshooting, industrial systems and continuous improvement.',
    skills: [
      'Maintenance',
      'Automation',
      'Electrical Systems',
      'Troubleshooting',
    ],
  };

