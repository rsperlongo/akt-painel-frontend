import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";
import decode from 'jwt-decode';
import { ROLE } from "../models/role";

@Injectable({ providedIn: 'root' })
export class RoleGuard  {
  authService = inject(AuthService);
  router = inject(Router);
  userRoles = ROLE.ADMIN

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Promise<boolean> {
    localStorage.setItem('ROLE', this.userRoles)
    const role = route.data["role"];
    const hasAccess = this.authService.hasRole(role);
    if(this.userRoles) {
      return hasAccess;
    }
    return hasAccess ? true : this.router.createUrlTree(['/unauthorized']);
  }
}