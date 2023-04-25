import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  private readonly APMESAS =     'http://localhost:8081/api/v1/Mesa';

  constructor(private httpClient: HttpClient) { }

  getMesas() {
    return this.httpClient.get(this.APMESAS);
  }
}
