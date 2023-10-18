import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models';

const API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

export const ROLES = {
  ADMIN : 'Admin',
  OPERATOR : 'Operador',
  ATTENDANT : 'Atendente'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userRole = ROLES.ADMIN;


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
    return this.http
      .post(
        `${API}/auth/login`,
        {
          username,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('ROLES', '')
          this.userSubject.next(null);
          this.isLoggedIn = true;
          return user;
        })
      );

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

  ): Observable<User> {
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
