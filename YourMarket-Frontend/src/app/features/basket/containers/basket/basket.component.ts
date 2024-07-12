import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../../shared/animations';
import { UserService } from '../../../../core/services/user.service';
import { BasketService } from '../../../../core/services/basket.service';
import { BasketViewComponent } from '../../components/basket-view/basket-view.component';
import { Basket } from '../../models/basket';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../../core/services/order.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [BasketViewComponent, CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
  animations: [fadeInAnimation],
  providers: [UserService, BasketService, OrderService],
})
export class BasketComponent implements OnInit, OnDestroy {
  private _userId: string | undefined;
  public basket$: Observable<Basket> | undefined;
  private _subscription = new Subscription();

  constructor(
    private basketService: BasketService,
    private userSerive: UserService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this._subscription.add(this.userSerive.getCurrentUser().subscribe(
      (user) => {
        this._userId = user._id;
        this.basket$ = this.basketService.getBasket(this._userId!);
      },
      (error) => {
        console.error('Error getting current user:', error);
      }
    ));
  }

  public createOrder(): void {
    console.log('Creating order');
    this.orderService.createOrder().subscribe();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
