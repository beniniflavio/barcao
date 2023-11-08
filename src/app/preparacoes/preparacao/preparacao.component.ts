import { Component, OnInit, Input } from '@angular/core';
import { CozinhaService } from 'src/app/cozinha/cozinha.service';
import { NotficationService } from 'src/app/services/notfication.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-preparacao',
  templateUrl: './preparacao.component.html',
  styleUrls: ['./preparacao.component.css']
})
export class PreparacaoComponent implements OnInit {

  success: any;
  mensagem: any;
  wrapper: any;
  show : string = 'não';

  @Input() idhash :any;
  constructor(
    private service: CozinhaService,
    private notification: NotficationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //document.getElementById(this.idhash+'_sp')!.style.removeProperty("width");
    window.setInterval( () => {
      this.show ='sim';
      document.getElementById(this.idhash)!.style.display = 'none';
      document.getElementById(this.idhash+ '_sp')!.style.display = 'block';
      this.service.getCozinha(this.idhash).subscribe({
        next: (result: any) => {
          // this.usersList?.push(result);
          this.wrapper = result;
          document.getElementById(this.idhash)!.style.display = 'block';
          document.getElementById(this.idhash+ '_sp')!.style.display = 'none';
          console.log(this.wrapper.msgSaida[0]);
       //   this.wrapper.msgSaida[0].forEach((element: any) => {
       //     console.log(this.getPreparacao(element));
       //     if (this.getPreparacao(element) == -1) {
       //     this.preparacoes.push(element);
       //     }
       //   });
          // this.wrapper.msgSaida[0].forEach(
          //   (element: { id: any}) => {

          //     // const newDiv = document.createElement("div");
          //     // newDiv.id = element.id;
          //     // newDiv.innerHTML = this.ph;

          //     // (document.getElementById('preparacoes') as HTMLInputElement).appendChild(newDiv);

          //   });


        },
        error: (err: any) => {
          this.mensagem = 'Nenhuma venda no balcao disponível';
        },
        complete: () => {
          this.success = true;
          this.mensagem = 'Balcao selecionadas com sucesso';
        },
      });

    }, 2000);

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
           this.notification.showInfo(
             'Preparação Finalizado com Sucesso',
             'consumo'
           );

           setInterval(function () {location.reload();}, 1500);
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

}
