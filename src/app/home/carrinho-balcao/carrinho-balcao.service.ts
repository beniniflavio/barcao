import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoBalcaoService {

  private readonly APICARRINHOBALCAO = 'http://localhost:8081/api/v1/Consumo/Carrinho/Balcao/Consumidor';

  constructor(private httpClient:HttpClient) { }

  setFechamentoBalcao (consumidor:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body= JSON.stringify(consumidor);

    return this.httpClient.post<any> (this.APICARRINHOBALCAO, body, httpOptions);

  }

}
