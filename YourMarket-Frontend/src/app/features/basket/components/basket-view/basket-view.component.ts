import { Component, Input } from '@angular/core';
import { Basket } from '../../models/basket';

@Component({
  selector: 'app-basket-view',
  standalone: true,
  imports: [],
  templateUrl: './basket-view.component.html',
  styleUrl: './basket-view.component.scss'
})
export class BasketViewComponent {
  @Input() basket: Basket | undefined;

  constructor() {
    console.log(this.basket);
  }
}
