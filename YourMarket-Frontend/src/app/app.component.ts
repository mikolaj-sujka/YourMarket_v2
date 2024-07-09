import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'YourMarket_v2';
  public showComponents: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute =
          this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
        this.showComponents =
          currentRoute !== 'sign-up' && currentRoute !== 'sign-in';
      });
  }
}
