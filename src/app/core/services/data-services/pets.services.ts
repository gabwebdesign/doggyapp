import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG } from '../../../config/config';
import { Pets } from 'src/app/share/models/pets.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private apiPath = CONFIG.apiPath;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getUserPets(userID: number): Observable<any>{
    return this.http.get(`${this.apiPath}/pets/?userId=${userID}`);
  }

  public getPets(): Observable<any>{
    return this.http.get(`${this.apiPath}/pets/`);
  }

  public getActivePet(): Observable<any> { 
    return this.http.get(`${this.apiPath}/pets?active=true`);
  }

  public activePet(userId:number): Observable<any> { 
    return this.http.patch(`${this.apiPath}/pets/${ userId }/`,{ active:true });
  }

  public desactivePet(userId:number): Observable<any> { 
    return this.http.patch(`${this.apiPath}/pets/${ userId }/`,{ active:false });
  }

  public creatingNewPet(userID: number,body:Pets): Observable<any>{
    return this.http.post(`${this.apiPath}/users/${userID}/pets`, body);
  }

  public deletePet(petId: number): Observable<any> {
    return this.http.delete(`${this.apiPath}/pets/${petId}`);
  }
  
}
