import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-account-view',
  standalone: true,
  imports: [],
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.scss',
})
export class AccountViewComponent {
  @Input() user: User | undefined;
}
