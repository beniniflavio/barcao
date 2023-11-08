import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CozinhaService {

  private readonly APICOZINHA =     'http://localhost:8081/api/v1/Cozinha/';
  private readonly APIPREPARACOES =     'http://localhost:8081/api/v1/Cozinha/Preparacoes';
  private readonly APIFINALIZADO =     'http://localhost:8081/api/v1/Cozinha/Finalizado/';



  constructor(private httpClient: HttpClient) { }

  getCozinha(idhash:any ) {
    return this.httpClient.get(this.APICOZINHA + idhash);
  }

  getPreparacoes() {
    return this.httpClient.get((this.APIPREPARACOES));
  }

  setFinalizaPreparacao(item : any) {
    return this.httpClient.get(this.APIFINALIZADO + item);
  }

  }
