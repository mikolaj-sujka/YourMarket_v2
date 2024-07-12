import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-history-view',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './order-history-view.component.html',
  styleUrl: './order-history-view.component.scss'
})
export class OrderHistoryViewComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.order);
  }
  @Input() order: Order[] | undefined;


}
