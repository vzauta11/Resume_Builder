import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'template',
    loadComponent: () =>
      import('../app/components/cv-template/cv-template.component').then(
        (m) => m.CvTemplateComponent
      ),
  },
];
