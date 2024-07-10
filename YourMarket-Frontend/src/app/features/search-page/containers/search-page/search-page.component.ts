import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fadeInAnimation } from '../../../../shared/animations';
import { ProductViewComponent } from '../../components/product-view/product-view.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterModule, CommonModule, ProductViewComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  animations: [fadeInAnimation],
})
export class SearchPageComponent {

}
