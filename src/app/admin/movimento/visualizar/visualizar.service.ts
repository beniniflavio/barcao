import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VisualizarService {

  private readonly APBALCAOS =   'http://localhost:8081/api/v1/Balcao';

  constructor(private httpClient: HttpClient) { }

  getLancamentos() {
    return this.httpClient.get(this.APBALCAOS);
  }
}
