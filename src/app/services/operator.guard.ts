import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router, UrlTree } from "@angular/router";
import { ROLE } from "../models/role";
import { RoleGuard } from "./role.guard";

@Injectable({ providedIn: 'root' })

export class OperatorGuard  {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(): boolean | UrlTree {
    const hasAccess = this.authService.hasRole(ROLE.OPERATOR);
    return hasAccess ? true : this.router.createUrlTree(['/unauthorized']);
  }
}