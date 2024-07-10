import { Component } from '@angular/core';
import { fadeInAnimation } from '../../../../shared/animations';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  animations: [fadeInAnimation],
})
export class ProductViewComponent {
  // Input Product
}
