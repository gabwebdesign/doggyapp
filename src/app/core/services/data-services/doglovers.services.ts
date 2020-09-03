import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CONFIG } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class DogloversService {

  private apiPath = CONFIG.apiPath;
  public dogActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private readonly http: HttpClient
  ) { }

  public getDoglovers(): Observable<any> { 
    return this.http.get(`${this.apiPath}/doglovers`);
  }

  public getActiveDogLover(): Observable<any> { 
    return this.http.get(`${this.apiPath}/doglovers?active=true`);
  }

  public activeDogLover(userId:number): Observable<any> { 
    return this.http.patch(`${this.apiPath}/doglovers/${ userId }/`,{ active:true });
  }

  public desactiveDogLover(userId:number): Observable<any> { 
    return this.http.patch(`${this.apiPath}/doglovers/${ userId }/`,{ active:false });
  }

}
