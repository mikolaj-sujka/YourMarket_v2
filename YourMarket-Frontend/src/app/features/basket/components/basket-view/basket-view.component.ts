import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Basket } from '../../models/basket';

@Component({
  selector: 'app-basket-view',
  standalone: true,
  imports: [],
  templateUrl: './basket-view.component.html',
  styleUrl: './basket-view.component.scss',
})
export class BasketViewComponent {
  @Input() basket: Basket | undefined;
  @Output() createOrder = new EventEmitter<void>();

  constructor() {
    console.log(this.basket);
  }

  public onCreateOrder() {
    console.log('Creating order');
    this.createOrder.emit();
  }
}
