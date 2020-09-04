import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Orders } from '../models/orders.model'
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'doggy-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.sass']
})
export class OrderCardComponent implements OnInit {
  @Input() order: Orders;
  @Output() onOrderSelected = new EventEmitter<Orders>();

  public roles:string

  constructor(
    private readonly authenticationServices:AuthenticationService
  ) { }

  ngOnInit(): void {
    this.roles = this.authenticationServices.getLoggedUser().roles;
  }

  public orderSelected(order: Orders):void{
    this.onOrderSelected.emit(order);
  }

}
