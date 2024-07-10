import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../../shared/animations';
import { AccountViewComponent } from '../../components/account-view/account-view.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountViewComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  animations: [fadeInAnimation],
})
export class AccountComponent {

}
