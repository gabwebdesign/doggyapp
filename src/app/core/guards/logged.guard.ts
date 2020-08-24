import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    if (this.authenticationService.isLoggedIn()) {
      return this.router.createUrlTree(['/', 'dashboard']);
    }

    return true;
  }

}