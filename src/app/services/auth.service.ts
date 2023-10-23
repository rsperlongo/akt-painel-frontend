import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from '../models';
import { ROLE } from '../models/role';
import { ActivatedRouteSnapshot } from '@angular/router';

const API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const ROLES = {
  ADMIN : 'Admin',
  OPERATOR : 'Operador',
  ATTENDANT : 'Atendente'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userRole = '';


  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  hasRole(role: string): boolean {
    return this.userRole === role
  }

  authenticate(username: string, password: string) {
    this.isLoggedIn = true
    return this.http
      .post(
        `${API}/auth/login`,
        {
          username,
          password
        },
        { observe: 'response' }
      )
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('STATE', 'true');
          localStorage.setItem('ROLE', this.userRole);
          this.userSubject.next(null);
          return user
        })
      );

  }

  getRole() {
    localStorage.getItem('ROLE');
    return this.userRole;
  }

  public get userValue() {
    return this.userSubject.value;
  }

  register(
    name: string,
    username: string,
    password: string,
    finalNumber: string,
    roles: string,

  ) {
    return this.http.post(
      `${environment.apiUrl}/auth/register`,
      { 
        name,
        username,
        password,
        finalNumber,
        roles
      },
      httpOptions
    );
  }
}
