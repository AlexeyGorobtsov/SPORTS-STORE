import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {NgModule} from '@angular/core';
import {Cart} from './cart.model';
import {OrderRepository} from './order.repository';
import {Order} from './order.model';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [ HttpModule ],
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository ]
})
export class ModelModule {}
