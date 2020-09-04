import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config/config';
import { timeout } from 'rxjs/operators';
import { Credentials } from 'src/app/share/models/credentials.model';
import { Observable } from 'rxjs';
import { Pets } from '../../share/models/pets.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private apiPath = CONFIG.apiPath;
  constructor(
    private readonly http: HttpClient) { }

  public login(credentials: Credentials): Observable<any> {
      return this.http
        .get(`${this.apiPath}/login`)
        .pipe(timeout(CONFIG.timeoutRequest));
  }

  public logout(){
    return this.http.post(`${this.apiPath}/logout`, {});
  }

  public forgotPassword(email: string){
    return this.http.post(`${this.apiPath}/forgotPassword`, {emailAddress: email});
  }

  public getUsers(): Observable<any>{
    return this.http.get(`${this.apiPath}/users`);
  }

  public getUser(userID: number): Observable<any>{
    return this.http.get(`${this.apiPath}/users/${userID}`);
  }

}
