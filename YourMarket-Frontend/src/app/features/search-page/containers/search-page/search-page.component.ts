import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fadeInAnimation } from '../../../../shared/animations';
import { ProductViewComponent } from '../../components/product-view/product-view.component';
import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../models/product';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../../../../core/services/user.service';
import { BasketService } from '../../../../core/services/basket.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterModule, CommonModule, ProductViewComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  animations: [fadeInAnimation],
  providers: [ProductService, UserService, BasketService],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public products$: Observable<Product[]> = this.productService.getProducts();

  private _userId: string | undefined;
  private _subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this._subscription.add(
      this.userService.getCurrentUser().subscribe(
        (user) => {
          this._userId = user._id;
        },
        (error) => {
          console.error('Error getting current user:', error);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public addToBasket(productId: string, price: number, name: string, quantity: number) {
    this.basketService
      .addToBasket(this._userId!, productId, name, price, quantity)
      .subscribe(
        (response) => {
          console.log('Item added to basket:', response);
        },
        (error) => {
          console.error('Error adding item to basket:', error);
        }
      );
  }
}
