
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  constructor(private readonly authenticationService: AuthenticationService) {}

  public hasRole(role: string): boolean {
    const userRole = this.authenticationService.getLoggedUser().roles;
    return role === userRole;
  }
}