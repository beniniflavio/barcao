import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API = 'http://localhost:8081/api/v1/Movimento/Aberto';

  constructor(private httpClient: HttpClient) {}

  getMovimentoAberto() {
    return this.httpClient.get(this.API);
  }
}
