import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Invoice } from '../models/invoice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { io } from "socket.io-client";
import { environment } from 'environment/environment';


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImlhdCI6MTY5ODA2MDQyNCwiZXhwIjoxNjk4MTQ2ODI0fQ.hVFXsJVtfvanClrkCcj-lPb32F-qyZKpcQGwl_vr7cc'
const Auth = `Bearer ${token}`

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': Auth, 'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' }),
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private socket: Socket,
    private http: HttpClient,
    ) { }

 /*  getInvoice() {
    this.socket.connect()
  } */

  /* registerSocket(
    nomeCliente: string,
    codigoCliente: string,
    valor: string,
    dataVencimento: string,
    cpfCnpj: string,
    descricao: string,
    nomeAvalistaBoleto: string,
    codigoBarrasPix: string,
    cidade: string,
    tipo: 'bo'
  ) {
    const socket = io(`${ environment.urlInvoice }`,  { transports: ['websocket'],
      withCredentials: true,
      extraHeaders: { 'auth': token }
   })
    this.socket.on('register', (invoice: Invoice) => {
      nomeCliente: invoice.nomeCliente,
      codigoCliente; 
      dataVencimento: invoice.dataVencimento,
      descricao;
      nomeAvalistaBoleto: invoice.nomeAvalistaBoleto,
      codigoBarrasPix; 
      cpfCnpj: invoice.cpfCnpj,
      cidade;
      tipo;
    })
    this.getInvoice()
    this.socket.fromEvent('registrar').subscribe((data) => {
      return data;
    })
  }  */
}
