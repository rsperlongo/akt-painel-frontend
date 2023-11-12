import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { Invoice } from '../models/invoice';
import { PaymentConfig } from '../models/payment-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentConfigService {

  constructor(private http: HttpClient) { }

  getPaymentConfig() {
    return this.http.get<PaymentConfig[]>(`${environment.apiUrl}/configuracoes`);
  }

}
