import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonalizadoService {
  private readonly APIMercadoria = 'http://localhost:8081/api/v1/Consumo/Get/';
  private readonly APIMercadoriaComponente = 'http://localhost:8081/api/v1/MercadoriaComponente/Get/';
  private readonly APIMercadoriaAdicional = 'http://localhost:8081/api/v1/MercadoriaAdicional/Get/';

  constructor(private httpClient: HttpClient) {}

  getMercadoria(idhash: any) {
    return this.httpClient.get(this.APIMercadoria + idhash);
  }

  getMercadoriaComponentes(idhash: any) {
    return this.httpClient.get(this.APIMercadoriaComponente + idhash);
  }

  getMercadoriaAdicional(idhash: any) {
    return this.httpClient.get(this.APIMercadoriaAdicional + idhash);
  }

}
