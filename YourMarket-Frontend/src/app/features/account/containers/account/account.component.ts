import { Component, Inject } from '@angular/core';
import { fadeInAnimation } from '../../../../shared/animations';
import { AccountViewComponent } from '../../components/account-view/account-view.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountViewComponent, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  animations: [fadeInAnimation],
})
export class AccountComponent {
  public user$: Observable<User> = this.userService.getCurrentUser();

  constructor(private userService: UserService) {}

}
