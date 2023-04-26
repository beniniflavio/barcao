import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private readonly APIFAVORITOS =  'http://localhost:8081/api/v1/Mercadoria/Favoritos';

  constructor(private httpClient: HttpClient) { }

  getFavoritos() {
    return this.httpClient.get(this.APIFAVORITOS);
  }
}
