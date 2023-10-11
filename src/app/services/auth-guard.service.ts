import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(username: string, password: string): boolean {
    if (!this.auth.authenticate(username, password)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}