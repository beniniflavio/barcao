import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AbrirService {

  private readonly APIABRIR = 'http://localhost:8081/api/v1/Movimento/Abrir';

  constructor(private httpClient:HttpClient) { }

  setMovimento(m:UntypedFormGroup) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    alert(m.value);
    const body= JSON.stringify(m.value);

    return this.httpClient.post<any> (this.APIABRIR, body, httpOptions);

  }
}
