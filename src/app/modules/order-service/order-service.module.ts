import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderServiceRoutingModule } from './order-service-routing.module';
import { OrderScreenComponent } from './order-screen/order-screen.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [OrderScreenComponent],
  imports: [
    CommonModule,
    OrderServiceRoutingModule,
    ShareModule
  ]
})
export class OrderServiceModule { }
