import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalcaoService {

  private readonly APBALCAOS =     'http://localhost:8081/api/v1/Balcao';

  constructor(private httpClient: HttpClient) { }

  getBalcao() {
    return this.httpClient.get(this.APBALCAOS);
  }
}
