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
  public roles:string;

  constructor(
    private readonly authenticationService:AuthenticationService,
    private readonly ordersServices:OrdersService
  ) { }

  ngOnInit(): void {
    this.roles = this.authenticationService.getLoggedUser().roles;
    if(this.roles == 'doglover'){
      this.gettingDogloverOrders(this.authenticationService.getLoggedUser().id);
    }else{
      this.gettingUserOrders(this.authenticationService.getLoggedUser().id);
    }
  }

  private gettingUserOrders(userid:number):void{
    this.ordersServices.getUserOrders(userid).subscribe(
      (result: Orders[])=>{
        this.orders = result;
        console.log('yours orders ',this.orders)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  private gettingDogloverOrders(userid:number):void{
    this.ordersServices.getDogloverOrders(userid).subscribe(
      (result: Orders[])=>{
        this.orders = result;
        console.log('yours orders ',this.orders)
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
        this.gettingUserOrders(this.authenticationService.getLoggedUser().id);
      }
    );
  }

}
