import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private readonly APIGRUPOS =  'http://localhost:8081/api/v1/Grupo';

  constructor(private httpClient:HttpClient) { }

  getGrupos() {
    return this.httpClient.get(this.APIGRUPOS);
  }

}
