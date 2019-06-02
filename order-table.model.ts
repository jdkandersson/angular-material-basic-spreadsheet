// order-table.model.ts
import { Order } from './order.model';

export class OrderTable {
    headers: string[];
    rowLabels: string[];
    orders: Order[];
    orderMap: {[header: string]: {[rowLabel: string]: Order}};
}
