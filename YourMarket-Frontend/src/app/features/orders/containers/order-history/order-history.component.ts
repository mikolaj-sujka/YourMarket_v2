import { Component } from '@angular/core';
import { OrderHistoryViewComponent } from "../../components/order-history-view/order-history-view.component";

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [OrderHistoryViewComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {

}
