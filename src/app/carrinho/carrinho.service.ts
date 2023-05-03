import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly APICarrinho =
    'http://localhost:8081/api/v1/Consumo/Carrinho/Balcao';

  constructor(private httpClient: HttpClient) {}

  getCarrinho() {
    return this.httpClient.get(this.APICarrinho);
  }
}
