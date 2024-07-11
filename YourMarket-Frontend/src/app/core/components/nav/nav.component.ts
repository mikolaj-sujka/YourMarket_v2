import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, ToastModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  providers: [MessageService],
})
export class NavComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  public userIsAuthenticated = false;
  private authListenerSubs: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.authService.checkAuthStatus();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this._subscription.unsubscribe();
  }
}
