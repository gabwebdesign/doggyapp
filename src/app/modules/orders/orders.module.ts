import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [MyOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ShareModule
  ]
})
export class OrdersModule { }
