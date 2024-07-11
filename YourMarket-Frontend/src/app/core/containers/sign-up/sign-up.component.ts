import { Component, OnDestroy } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { fadeInAnimation } from '../../../shared/animations';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { tap, catchError, of, Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FloatLabelModule,
    CheckboxModule,
    RouterModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  animations: [fadeInAnimation],
  providers: [MessageService],
})
export class SignUpComponent implements OnDestroy {
  private _subscription: Subscription = new Subscription();
  public readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    postalCode: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    nameOfCompany: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    city: new FormControl('', [Validators.required, Validators.minLength(8)]),
    nip: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
    this.authService.signUpUser(this.form.value);
  }
}
