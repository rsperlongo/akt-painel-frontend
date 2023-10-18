import { Injectable, inject } from "@angular/core";
import { AuthService, ROLES } from "./auth.service";
import { Router, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root' })

export class AttendantGuard  {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(): boolean | UrlTree {
    const hasAccess = this.authService.hasRole(ROLES.ATTENDANT);
    return hasAccess ? true : this.router.createUrlTree(['/unauthorized']);
  }
}