import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProjectCardComponent } from './project-card';
import { LanguageService } from '../../../shared/services/language.service';

describe('ProjectCard', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
      providers: [
        provideRouter([]),
        {
          provide: LanguageService,
          useValue: {
            translate: (text: any) => text?.es ?? ''
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);

    fixture.componentRef.setInput('project', {
      id: '1',
      acronym: 'TEST',
      title: {
        es: 'Proyecto Test',
        en: 'Test Project'
      },
      summary: {
        es: 'Resumen del proyecto',
        en: 'Project summary'
      },
      description: {
        es: 'Descripción del proyecto',
        en: 'Project description'
      },
      technologies: ['Angular']
    });

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});