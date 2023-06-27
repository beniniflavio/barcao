import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly APIMESACONTA =  'http://localhost:8081/api/v1/Mesa/Conta/';

  private readonly APIMESAPAGAMENTO =  'http://localhost:8081/api/v1/Pagamento/Set';

  private readonly APIDELPAGAMENTO = 'http://localhost:8081/api/v1/Pagamento/Delete/';

  private readonly APIFECHAMENTO= 'http://localhost:8081/api/v1/Pagamento/Venda/';

  constructor(private httpClient:HttpClient,) { }

  getMesa( idhash:any) {
    return this.httpClient.get(this.APIMESACONTA + idhash);
  }

  setPagamento(p: FormGroup) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body= JSON.stringify(p.value);

    return this.httpClient.post<any> (this.APIMESAPAGAMENTO, body, httpOptions);

  }


  getDelPagamento( idhashMesa:any, idhashpagamento:any ) {
    return this.httpClient.get(this.APIDELPAGAMENTO + idhashMesa + '/' + idhashpagamento);
  }
  setFechaPagamento( idhash:any) {
    return this.httpClient.get(this.APIFECHAMENTO + idhash );
  }

}
