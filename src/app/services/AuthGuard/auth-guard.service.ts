import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../Authentication/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, public auth:AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.auth.currentUserValue;
      if (currentUser) {
        return true;
      }
      this.router.navigate(['/login']);
      //, { queryParams: { returnUrl: state.url } }
      return false;
  }
}
