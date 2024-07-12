import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderHistoryViewComponent } from '../../components/order-history-view/order-history-view.component';
import { OrderService } from '../../../../core/services/order.service';
import { UserService } from '../../../../core/services/user.service';
import { Observable, Subscription } from 'rxjs';
import { Order } from '../../models/Order';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../../../shared/animations';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [OrderHistoryViewComponent, CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss',
  providers: [OrderService, UserService],
  animations: [fadeInAnimation],
})
export class OrderHistoryComponent implements OnInit, OnDestroy {
  private _userId: string | undefined;
  public orders$: Observable<Order[]> | undefined;
  private _subscription = new Subscription();

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this._subscription.add(this.userService.getCurrentUser().subscribe(
      (user) => {
        this._userId = user._id;
        console.log(this._userId);
        this.orders$ = this.orderService.getOrders(this._userId!);
      },
      (error) => {
        console.error('Error getting current user:', error);
      }
    ));
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
