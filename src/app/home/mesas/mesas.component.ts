import { MesasService } from './../../services/mesas.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  success:any;
  mensagem:any;

  wrapper: any;

  constructor(private service: MesasService,
    private svcAdmin :AdminService,
    private router:Router) { }


  ngOnInit(): void {
    this.svcAdmin.getMovimentoAberto().subscribe( response => {
      this.wrapper = response;
      if ( this.wrapper.msgSaida[0] == null )
      this.router.navigate([ 'Movimento' ]);
    });

    this.service.getMesas().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mesa disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Mesa selecionadas com sucesso';
      },
    });

  }

}
