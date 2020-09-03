import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { OrdersService } from 'src/app/core/services/data-services/orders.services';
import { Orders } from 'src/app/share/models/orders.model';

@Component({
  selector: 'doggy-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.sass']
})
export class MyOrdersComponent implements OnInit {

  public orders:Orders[];

  constructor(
    private readonly authenticationService:AuthenticationService,
    private readonly ordersServices:OrdersService
  ) { }

  ngOnInit(): void {
    this.gettingOrders(this.authenticationService.userId);
  }

  private gettingOrders(userid:number):void{
    this.ordersServices.getUserOrders(userid).subscribe(
      (result: Orders[])=>{
        this.orders = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  public inParentOrderSelected(item:Orders):void{
    console.log('from parent deleted', item);
    this.ordersServices.cancelOrder(item.id).subscribe(
      (result)=>{
        this.gettingOrders(this.authenticationService.userId);
      }
    );
  }

}
