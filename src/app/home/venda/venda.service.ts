import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarrinhoData } from 'src/app/model/data/CarrinhoData';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private readonly APICARRINHOBALCAO = 'http://192.168.0.172:8081/api/v1/Consumo/Carrinho/Balcao/Venda';
  constructor(private httpClient:HttpClient) { }

  addConsumoBalcao (carrinho:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body= JSON.stringify(carrinho);

    return this.httpClient.post<any> (this.APICARRINHOBALCAO, body, httpOptions);

  }
}
