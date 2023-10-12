import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class RoleGuard  {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    // Get the role from the route data
    const role = route.data["role"];
    const hasAccess = this.authService.hasRole(role);
    return hasAccess ? true : this.router.createUrlTree(['/unauthorized']);
  }
}