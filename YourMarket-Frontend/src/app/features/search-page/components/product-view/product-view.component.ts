import { Component, Input, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../../shared/animations';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  animations: [fadeInAnimation],
})
export class ProductViewComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.product);
  }
  @Input() product: Product | undefined;
}
