import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendamesaService {

  private readonly APICARRINHOMESA = 'http://localhost:8081/api/v1/Consumo/Carrinho/Balcao/Venda';
  constructor(private httpClient:HttpClient) { }

  addConsumoMesa (carrinho:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body= JSON.stringify(carrinho);

    return this.httpClient.post<any> (this.APICARRINHOMESA, body, httpOptions);

  }

}
