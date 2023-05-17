import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private readonly APIMENSAGEM = 'http://localhost:8081/api/v1/Mensagem';

  constructor(private httpClient: HttpClient) {}

  getMensagens() {
    return this.httpClient.get(this.APIMENSAGEM);
  }

}
