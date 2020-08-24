import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderServiceRoutingModule } from './order-service-routing.module';
import { OrderScreenComponent } from './order-screen/order-screen.component';


@NgModule({
  declarations: [OrderScreenComponent],
  imports: [
    CommonModule,
    OrderServiceRoutingModule
  ]
})
export class OrderServiceModule { }
