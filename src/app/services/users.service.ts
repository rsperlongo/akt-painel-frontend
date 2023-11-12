import { environment } from './../../../environment/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models';
import { TokenService } from './token.service';
import jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Role: 'Admin' }),
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService, private http: HttpClient) {
    if (this.tokenService.getToken()) {
      this.decodeJWT();
    }
  }

  public get userValue() {
    return this.userSubject.value;
  }

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  public returnUser() {
    return this.userSubject.asObservable();
  }

  public saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject.next({});
  }

  public isLoggedIn() {
    return this.tokenService.getToken();
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`, httpOptions);
  }

  getAllOperator(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/operators`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`, httpOptions)
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/users/${id}`, data, httpOptions)
      .pipe(map(x => {
        if (id == this.userValue?.id) {
          const user = { ...this.userValue, ...data };
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`, httpOptions)
      .pipe(map(x => {
        if (id == this.userValue?.id) {
          this.logout();
        }
        return x;
      }));
  }
}
