import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MercadoriasgrupoService {
  private readonly APIMERCCADORIASGRUPO =
    'http://localhost:8081/api/v1/Mercadoria/Grupo/';
  constructor(private httpClient: HttpClient) {}

  getMercadoriasGrupos(idhash: any) {
    return this.httpClient.get(this.APIMERCCADORIASGRUPO + idhash);
  }
}
