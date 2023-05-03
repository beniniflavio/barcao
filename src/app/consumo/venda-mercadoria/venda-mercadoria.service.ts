import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class VendaMercadoriaService {

  private readonly APIMercadoria =  'http://localhost:8081/api/v1/Mercadoria/';

  private readonly APICONSUMO =  'http://localhost:8081/api/v1/Consumo/VendaMercadoria';

  constructor(private httpClient:HttpClient) { }


  getMercadoria(idhash :any) {
    return this.httpClient.get(this.APIMercadoria + idhash);
  }

  addConsumo(c : FormGroup) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body= JSON.stringify(c);

    return this.httpClient.post<any> (this.APICONSUMO, body, httpOptions);

  }

}
