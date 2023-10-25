import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from '../models';
import { ROLE } from '../models/role';

const API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Role: 'Admin' }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  userRole = '';
  roleAs!: string;


  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  hasRole(role: string): boolean {
    return this.roleAs === role
  }

  authenticate(username: string, password: string) {

    this.isLoggedIn = true
    return this.http
      .post(
        `${API}/auth/login`, 
        {
          username,
          password,
          httpOptions
        },
        { observe: 'response' }
      )
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('STATE', 'true');
          localStorage.setItem('ROLE', this.userRole );
          this.userSubject.next(null);
          return of({ success: this.isLoggedIn, role: this.userRole });
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
    );
  }
}
