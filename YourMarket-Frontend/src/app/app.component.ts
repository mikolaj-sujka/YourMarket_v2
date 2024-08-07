import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { filter, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'YourMarket_v2';
  public showComponents$: Observable<boolean> | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.showComponents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        const currentRoute =
          this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
        return currentRoute !== 'sign-up' && currentRoute !== 'sign-in';
      })
    );
  }
}
