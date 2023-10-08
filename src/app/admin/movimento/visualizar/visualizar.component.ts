import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'],
})
export class VisualizarComponent implements OnInit {
  success: any;
  mensagem: any;
  wrapper: any;
  movimento :any;
  operacao:any;

  constructor(private svcAdmin: AdminService,
    private router: Router,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.svcAdmin.getMovimentoAberto().subscribe((response) => {
      this.operacao= 'resumo';
      this.wrapper = response;

      this.wrapper.msgSaida[0].data = this.datePipe.transform(this.wrapper.msgSaida[0].data, 'dd/MM/yyyy');

      if (this.wrapper.msgSaida[0] == null) {
        this.router.navigate(['Movimento']);
      } else {
        this.movimento = this.wrapper.msgSaida[0];
      }
    });
  }

  setOperacao(op : string, elm : any) {
     document.getElementById('btnresumo')!.classList.remove('active');
     document.getElementById('btndetalhe')!.classList.remove('active');
     document.getElementById('btntipo')!.classList.remove('active');

    this.operacao = op;
    document.getElementById(elm.target.id)!.classList.add('active');

  }

}
