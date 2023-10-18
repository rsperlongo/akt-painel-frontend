import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environment/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private invoice: Invoice,
    private http: HttpClient
  ) { }

  generateInvoice(
    nomeCliente: string,
    valor: string,
    dataVencimento: string,
    cpfCnpj: string,
    descricao: string,
  ) {
    return this.http.post(`${environment.apiInvoice}/boleto`, {
      nomeCliente,
      valor,
      dataVencimento,
      cpfCnpj,
      descricao,
    }, 
    httpOptions)
  }
}
