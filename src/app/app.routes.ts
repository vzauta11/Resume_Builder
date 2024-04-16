import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'template',
    pathMatch:'full'
  },
  {
    path: 'template',
    loadComponent: () =>
      import('../app/components/cv-template/cv-template.component').then(
        (m) => m.CvTemplateComponent
      ),
  },
];
