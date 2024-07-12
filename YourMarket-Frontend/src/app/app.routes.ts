import { Routes } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { UserService } from './core/services/user.service';
import { ProductService } from './core/services/product.service';

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
    providers: [AuthService],
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./core/containers/sign-up/sign-up.component').then(
        (mod) => mod.SignUpComponent
      ),
    providers: [AuthService],
    pathMatch: 'full',
  },
  {
    path: 'search-page',
    loadComponent: () =>
      import(
        './features/search-page/containers/search-page/search-page.component'
      ).then((mod) => mod.SearchPageComponent),
    pathMatch: 'full',
    canActivate: [AuthGuard],
    providers: [ProductService],
  },
  {
    path: 'my-account',
    loadComponent: () =>
      import('./features/account/containers/account/account.component').then(
        (mod) => mod.AccountComponent
      ),
    pathMatch: 'full',
    canActivate: [AuthGuard],
    providers: [UserService],
  },
  {
    path: 'my-basket',
    loadComponent: () =>
      import('./features/basket/containers/basket/basket.component').then(
        (mod) => mod.BasketComponent
      ),
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
