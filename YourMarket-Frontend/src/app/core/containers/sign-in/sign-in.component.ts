import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../shared/animations';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FloatLabelModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  animations: [fadeInAnimation],
})
export class SignInComponent {

  public readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authService: AuthService) {}

  public submitForm(): void {
    console.log(this.form.value);
    this.authService.loginUser(this.form.value);
  }
}
