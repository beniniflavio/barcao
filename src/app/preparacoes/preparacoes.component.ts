import { Component, OnInit } from '@angular/core';
import { CozinhaService } from '../cozinha/cozinha.service';

@Component({
  selector: 'app-preparacoes',
  templateUrl: './preparacoes.component.html',
  styleUrls: ['./preparacoes.component.css']
})
export class PreparacoesComponent implements OnInit {

  success: any;
  mensagem: any;
  wrapper: any;
  preparacoes :any[] = [];

  constructor(private service: CozinhaService,) { }

  ngOnInit(): void {
    //window.setInterval( () => {
    this.service.getPreparacoes().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;

        this.wrapper.msgSaida[0].forEach((element: any) => {
          window.setInterval( (item:any) => {

          }, 20000);

          });

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
   // }, 2000);
  }

  getPreparacao(prep : any): number {
      return this.preparacoes.find((obj) => {
      if (obj.id == prep.id) {
        return 0;
      }  else {
        return -1;
      }
    });

  }


  carregarItem() {

  }

}
