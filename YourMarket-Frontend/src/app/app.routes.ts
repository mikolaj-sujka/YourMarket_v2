import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './features/home-page/containers/home-page/home-page.component'
      ).then((mod) => mod.HomePageComponent),
    providers: [],
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./core/containers/sign-in/sign-in.component').then(
        (mod) => mod.SignInComponent
      ),
    providers: [],
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./core/containers/sign-up/sign-up.component').then(
        (mod) => mod.SignUpComponent
      ),
    providers: [],
    pathMatch: 'full',
  },
  {
    path: 'search-page',
    loadComponent: () =>
      import(
        './features/search-page/containers/search-page/search-page.component'
      ).then((mod) => mod.SearchPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'my-account',
    loadComponent: () =>
      import('./features/account/containers/account/account.component').then(
        (mod) => mod.AccountComponent
      ),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
