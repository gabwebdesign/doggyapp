import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Orders } from '../models/orders.model'

@Component({
  selector: 'doggy-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.sass']
})
export class OrderCardComponent implements OnInit {
  @Input() order: Orders;
  @Output() onOrderSelected = new EventEmitter<Orders>();

  constructor() { }

  ngOnInit(): void {
  }

  public orderSelected(order: Orders):void{
    this.onOrderSelected.emit(order);
  }

}
