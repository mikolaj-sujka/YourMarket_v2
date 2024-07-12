import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { fadeInAnimation } from '../../../../shared/animations';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../models/product';
import { BasketService } from '../../../../core/services/basket.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  animations: [fadeInAnimation],
  providers: [BasketService, UserService],
})
export class ProductViewComponent {
  @Input() product: Product | undefined;
  @Output() addToBasketEvent = new EventEmitter<{
    productId: string;
    price: number;
    name: string;
    quantity: number;
  }>();

  public addToBasket(productId: string, price: number, name: string, quantity: number) {
    this.addToBasketEvent.emit({ productId, price, name, quantity});
  }
}
