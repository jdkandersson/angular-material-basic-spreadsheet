// order.service.ts
import { Injectable } from '@angular/core';

import { Order } from './order.model';
import { OrderTable } from './order-table.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrderTable(): OrderTable {
    const orders: Order[] = [
      {date: '2000-01-01', product: 'Apples', value: 1000},
      {date: '2000-02-01', product: 'Apples', value: 2000},
      {date: '2000-01-01', product: 'Oranges', value: 10000}
    ];
    return {
      headers: ['2000-01-01', '2000-02-01'],
      rowLabels: ['Apples', 'Oranges'],
      orders: orders,
      orderMap: {
        '2000-01-01': {
          'Apples': orders[0],
          'Oranges': orders[2]
        },
        '2000-02-01': {
          'Apples': orders[1]
        }
      }
    };
  }
}
