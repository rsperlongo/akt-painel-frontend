import { Injectable, inject } from "@angular/core";
import { AuthService, ROLES } from "./auth.service";
import { Router, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root' })

export class AdminGuard  {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(): boolean | UrlTree {
    const hasAccess = this.authService.hasRole(ROLES.ADMIN);
    return hasAccess ? true : this.router.createUrlTree(['/unauthorized']);
  }
}