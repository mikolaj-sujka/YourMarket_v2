import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home-page/components/home-page/home-page.component').then(
        (mod) => mod.HomePageComponent
      ),
    providers: [],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
