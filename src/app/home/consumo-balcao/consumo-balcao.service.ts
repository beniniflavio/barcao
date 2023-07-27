import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoBalcaoService {
  private readonly APICARRINHOBALCAO = 'http://localhost:8081/api/v1/Consumo/Carrinho/Balcao/Consumidor';

  constructor(private httpClient:HttpClient) { }



}
