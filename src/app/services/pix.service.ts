import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pix } from '../models/pix';



@Injectable({
  providedIn: 'root'
})
export class PixService {

  constructor(private http: HttpClient) { }

  generatePix(nome: string, cidade: string, chave: string, valor: string ) {
    const pix = `https://gerarqrcodepix.com.br/api/v1?nome=${nome}&cidade=${cidade}&saida=br&chave=${chave}&valor=${valor}`
    return this.http.post(`${pix}`, {
      nome,
      cidade,
      chave,
      valor
    }, { observe: 'response' }).pipe(map((req) => req.body))
  }
}
