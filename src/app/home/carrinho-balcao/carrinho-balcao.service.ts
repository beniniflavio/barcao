import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoBalcaoService {
  private readonly APICarrinho =
    'http://localhost:8081/api/v1/Consumo/Carrinho/Balcao/Venda';

  constructor(private httpClient: HttpClient) {}

  getCarrinho() {
    return this.httpClient.get(this.APICarrinho);
  }
}
