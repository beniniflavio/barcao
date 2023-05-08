import { Component, OnInit } from '@angular/core';
import { PersonalizadoService } from './personalizado.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.css'],
})
export class PersonalizadoComponent implements OnInit {
  wrapper: any;
  wrapperGrupo: any;
  mensagem: any;
  success: any;
  idhash: any;

  constructor(
    private service: PersonalizadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idhash = params['id'];
    });
    this.getMercadoria();
  }
  getMercadoria() {
    this.service.getMercadoria(this.idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadoria obtida com sucesso';
      },
    });
  }

  addComponente(comp: any) {
    this.wrapper.msgSaida[0].personalizado.push(comp);
  }

  delComponente(idx :any) {
    this.wrapper.msgSaida[0].personalizado[idx].situacao =1;
  }

  recComponente(idx :any) {
    this.wrapper.msgSaida[0].personalizado[idx].situacao =0;
  }

  sndConsumo(idhash:any) {
    this.router.navigate( ['Grupo/'+ idhash]);
  }
  sndFinalizar(item:any){
    let a = 0;
  }

}
