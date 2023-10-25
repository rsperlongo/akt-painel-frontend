import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";

// import { CanActivateFn, Router } from "@angular/router";
// import { AuthService } from "./auth.service";
// import { inject } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RoleGuard  {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Promise<boolean> {
    const {role} = route.data;
    const hasAccess = this.authService.hasRole(role);
    return hasAccess ? true : this.router.createUrlTree(['/unauthorized']);
  }
}

// export const roleGuard = (role: 'ADMIN' | 'OPERATOR' | 'ATTENDANT'): CanActivateFn => {
//   const guard: CanActivateFn = () => {
//     const authService = inject(AuthService);
//     const router = inject(Router);

//     const hasAccess = authService.hasRole(role);
//     return hasAccess ? true : router.createUrlTree(['/unauthorized']);
//   };

//   return guard;
// };