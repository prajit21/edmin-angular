import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DatatableOrderHistory } from './datatable-order-history/datatable-order-history';
import { OrdersData } from './orders-data/orders-data';

@Component({
  selector: 'app-order-history',
  imports: [CommonModule, OrdersData, DatatableOrderHistory],
  templateUrl: './order-history.html',
  styleUrl: './order-history.scss',
})
export class OrderHistory {}
