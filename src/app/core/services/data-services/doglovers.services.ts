import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class DogloversService {

  private apiPath = CONFIG.apiPath;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getDoglovers(): Observable<any> { 
    return this.http.get(`${this.apiPath}/doglovers`);
  }
  
}
