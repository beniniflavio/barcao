import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConsumoPersonalizadoData } from 'src/app/model/data/ConsumoPersonalizadoData';

@Injectable({
  providedIn: 'root',
})
export class PersonalizadoService {
  private readonly APIMercadoria = 'http://localhost:8081/api/v1/Consumo/Get/';
  private readonly APIMercadoriaComponente = 'http://localhost:8081/api/v1/MercadoriaComponente/Get/';
  private readonly APIMercadoriaAdicional = 'http://localhost:8081/api/v1/MercadoriaAdicional/Get/';
  private readonly APICONSUMOPERSONALIZADO = 'http://localhost:8081/api/v1/Consumo/Insert/Personalizado';

  cmPer =new ConsumoPersonalizadoData();

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

  setFinalizaConsumo(c:any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.cmPer.chave = c.chave;
    this.cmPer.consumidor = c.consumidor;
    this.cmPer.total = c.total;

    for (let index = 0; index < c.ingredientes.length; index++) {
      this.cmPer.ingredientes.push(c.ingredientes[index]);

    }


    const body= JSON.stringify(this.cmPer);

    return this.httpClient.post<any> (this.APICONSUMOPERSONALIZADO, body, httpOptions);

  }


}
