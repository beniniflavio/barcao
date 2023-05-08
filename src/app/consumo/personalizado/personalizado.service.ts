import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonalizadoService {
  private readonly APIMercadoria = 'http://localhost:8081/api/v1/Mercadoria/';

  constructor(private httpClient: HttpClient) {}

  getMercadoria(idhash: any) {
    return this.httpClient.get(this.APIMercadoria + idhash);
  }
}
