import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router, UrlTree } from "@angular/router";
import { ROLE } from "../models/role";

@Injectable({ providedIn: 'root' })

export class AdminGuard  {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(): boolean | UrlTree {
    const hasAccess = this.authService.hasRole(ROLE.ADMIN);
    return hasAccess ? true : this.router.createUrlTree(['/unauthorized']);
  }
}