import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  private apiPath = CONFIG.apiPath;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getStories(): Observable<any> { 
    return this.http.get(`${this.apiPath}/stories`);
  }
  
}
