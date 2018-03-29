import {Injectable} from '@angular/core';
import {StaticDataSource} from './static.datasource';
import {Order} from './order.model';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  constructor(private dataSource: StaticDataSource) {}

  getOrder(): Order[] {
    return this.orders;
  }

  saveOrders(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
