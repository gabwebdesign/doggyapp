import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderScreenComponent } from './order-screen/order-screen.component';

const routes: Routes = [
  {
    path: '',
    component: OrderScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderServiceRoutingModule { }
