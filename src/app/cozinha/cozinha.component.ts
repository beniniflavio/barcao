import { Component, OnInit, Input } from '@angular/core';
import { CozinhaService } from './cozinha.service';
import { NotficationService } from 'src/app/services/notfication.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css'],
})
export class CozinhaComponent implements OnInit {
  success: any;
  mensagem: any;
  wrapper: any;
  @Input() idhash :any;

    preparos: {id: string, inicio:Date, fim:Date} []= [];

  constructor(
    private service: CozinhaService,
    private notification: NotficationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.setInterval(this.setProgress, 5000);
    this.service.getCozinha(this.idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        this.wrapper.msgSaida[0].forEach(
          (element: { id: any; ingredientes: any; quantidade: number, data_emissao: Date, data_termino:Date }) => {
            let qnt: number = 0;
            element.ingredientes.forEach((ing: { tipo: any }) => {
              if (ing.tipo == 1) {
                qnt++;
              }
            });
            element.quantidade = qnt;
            let preparo = {id: element.id, inicio: element.data_emissao, fim: element.data_termino};
          });

      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma venda no balcao disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Balcao selecionadas com sucesso';
      },
    });
    setInterval( setProgress =>{

      const emissao = (document.getElementById('data_emissao-'+this.idhash) as HTMLInputElement).value;

      const tmEmissao =  new Date(emissao);


      const timerest = Math.floor( ((new Date()).getMinutes() - tmEmissao.getMinutes() ) *3.33);

      //let pretime = Date.parse(document.getElementById('data_emissao')?.innerText.toString());

      document.getElementById('inicio-'+this.idhash)?.innerText
      document.getElementById('progresstime-'+this.idhash)!.style.removeProperty("width");
      document.getElementById('progresstime-'+this.idhash)!.style.width = timerest  + '%';

      document.getElementById('progresstime-'+this.idhash)!.classList.remove('bg-success');
      document.getElementById('progresstime-'+this.idhash)!.classList.remove('bg-warning');
      document.getElementById('progresstime-'+this.idhash)!.classList.remove('bg-danger');
      if (timerest <70) {
        document.getElementById('progresstime-'+this.idhash)!.classList.add('bg-success');
      } else if (timerest < 85) {
          document.getElementById('progresstime-'+this.idhash)!.classList.add('bg-warning');
      } else {
        document.getElementById('progresstime-'+this.idhash)!.classList.add('bg-danger');
      }


  }
    ,1000);
  }

  finalizaPreparo(item: any) {
    this.service.setFinalizaPreparacao(item).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        if ((this.wrapper.result = 'SUCCESS')) {
          // this.notification.showInfo(
          //   'Preparação Finalizado com Sucesso',
          //   'consumo'
          // );

         setInterval(() => {
           this.router.navigate(['Cozinha']);
         }, 1500);
        }
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma venda no balcao disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Balcao selecionadas com sucesso';
      },
    });

  }

  setProgress( ) {
    const emissao = (document.getElementById('data_emissao') as HTMLInputElement).value;

    const tmEmissao =  new Date(emissao);


    const timerest = Math.floor( ((new Date()).getMinutes() - tmEmissao.getMinutes() ) *3.33);

    //let pretime = Date.parse(document.getElementById('data_emissao')?.innerText.toString());

    document.getElementById('inicio')?.innerText
    document.getElementById('progresstime')!.style.removeProperty("width");
    document.getElementById('progresstime')!.style.width = timerest  + '%';

    document.getElementById('progresstime')!.classList.remove('bg-success');
    document.getElementById('progresstime')!.classList.remove('bg-warning');
    document.getElementById('progresstime')!.classList.remove('bg-danger');
    if (timerest <70) {
      document.getElementById('progresstime')!.classList.add('bg-success');
    } else if (timerest < 85) {
        document.getElementById('progresstime')!.classList.add('bg-warning');
    } else {
      document.getElementById('progresstime')!.classList.add('bg-danger');
    }


  }



}
