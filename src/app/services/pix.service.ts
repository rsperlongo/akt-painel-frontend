import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pix } from '../models/pix';

const pix = 'https://gerarqrcodepix.com.br/api/v1?nome=${nomeCliente}&cidade=${cidade}&saida=br&chave=${pix}&valor=${valorAPagar}'

@Injectable({
  providedIn: 'root'
})
export class PixService {

  constructor(private http: HttpClient) { }

  generatePix(nome: string, cidade: string, chave: string, valor: string ) {
    return this.http.post(`${pix}`, {
      nome,
      cidade,
      chave,
      valor
    }, { observe: 'response' })
  }
}
