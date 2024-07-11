import { Component, OnDestroy } from '@angular/core';
import { fadeInAnimation } from '../../../shared/animations';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { catchError, of, Subscription, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FloatLabelModule, RouterModule, ReactiveFormsModule, ToastModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  animations: [fadeInAnimation],
  providers: [MessageService],
})
export class SignInComponent implements OnDestroy {
  private _subscription: Subscription = new Subscription();
  public readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public submitForm(): void {
    this.authService.loginUser(this.form.value);
  }
}
