import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../shared/animations';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FloatLabelModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  animations: [fadeInAnimation],
})
export class SignInComponent {

}
