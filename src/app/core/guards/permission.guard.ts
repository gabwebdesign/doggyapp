
import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanLoad {
  constructor(private readonly authenticationService: AuthenticationService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    const currentRole = this.authenticationService.getLoggedUser().roles;
    console.log(currentRole);
    if (currentRole === route.data.roleNeeded) {
      return true;
    }

     return false;
  }
}