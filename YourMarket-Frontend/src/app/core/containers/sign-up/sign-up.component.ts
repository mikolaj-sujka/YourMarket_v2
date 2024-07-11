import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { fadeInAnimation } from '../../../shared/animations';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FloatLabelModule,
    CheckboxModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  animations: [fadeInAnimation],
})
export class SignUpComponent {
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

  constructor(private authService: AuthService) {}

  public submitForm(): void {
    console.log(this.form.value);
    this.authService.signUpUser(this.form.value);
  }
}
