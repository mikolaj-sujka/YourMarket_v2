import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './features/home-page/components/home-page/home-page.component'
      ).then((mod) => mod.HomePageComponent),
    providers: [],
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./core/containers/sign-in/sign-in.component').then(
        (mod) => mod.SignInComponent
      ),
    providers: [],
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./core/containers/sign-up/sign-up.component').then(
        (mod) => mod.SignUpComponent
      ),
    providers: [],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
