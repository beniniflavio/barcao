import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  private readonly APIMOVIMENTOABERTO = 'http://localhost:8081/api/v1/Movimento/Aberto';
  private readonly APIEMPRESA =         'http://localhost:8081/api/v1/Empresa';
  private readonly APICarrinho =        'http://localhost:8081/api/v1/Consumo/Carrinho/Balcao/Venda';
  private readonly APIDeleteConsumo =   'http://localhost:8081/api/v1/Consumo/Delete/';

  constructor(private httpClient: HttpClient) {}

  getMovimentoAberto() {
    return this.httpClient.get(this.APIMOVIMENTOABERTO);
  }

  getEmpresas() {
    return this.httpClient.get(this.APIEMPRESA);
  }

  getCarrinho() {
    return this.httpClient.get(this.APICarrinho);
  }

  delConsumo(c : any) {
    return this.httpClient.get(this.APIDeleteConsumo + c );
  }

  delTodoConsumo() {
    return this.httpClient.get(this.APIDeleteConsumo );
  }


}
