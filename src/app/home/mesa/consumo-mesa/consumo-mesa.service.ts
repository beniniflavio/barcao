import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoMesaService {

  private readonly APISETMESA =  'http://localhost:8081/api/v1/Consumo/Set/Mesa/';

  constructor(private httpClient:HttpClient,) { }

  SetMesa( idhash:any) {
    return this.httpClient.get(this.APISETMESA + idhash);
  }
}
