import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public getImageBase64(): Observable<string> {
    return this.http.get('assets/serasa-base64.txt', { responseType: 'text' });
  }
}
