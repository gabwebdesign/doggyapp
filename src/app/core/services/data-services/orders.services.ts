import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { CONFIG } from '../../../config/config';
import { Orders } from '../../../share/models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiPath = CONFIG.apiPath;

  constructor(
    private readonly http: HttpClient
  ) { }

  public makeOrders(body:Orders): Observable<any> { 
    return this.http.post(`${this.apiPath}/orders/`,body);
  }

  public getUserOrders(userID: number): Observable<any>{
    return this.http.get(`${this.apiPath}/orders/?userId=${userID}`);
  }

  public cancelOrder(orderId:number): Observable<any> { 
    return this.http.delete(`${this.apiPath}/orders/${orderId}`);
  }

}