import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { NotficationService } from 'src/app/services/notfication.service';
import { formatNumber } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-consumo-balcao',
  templateUrl: './consumo-balcao.component.html',
  styleUrls: ['./consumo-balcao.component.css']
})
export class ConsumoBalcaoComponent implements OnInit {

  constructor(
    private service: AdminService,
    private notification: NotficationService,
    private router: Router,
  ){}

  wrapper: any;
  mensagem: any;
  success: any;
  total: any;

  ngOnInit(): void {
    this.getCarrinho();
  }

  getCarrinho() {
    this.service.getCarrinho().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        //this.total = this.formatvalor(this.wrapper.msgSaida[0].total);
        //this.getConsumos(this.wrapper);
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

  delConsumo(c: any) {
    this.service.delConsumo(c).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.notification.showInfo(result.msgSaida[0], 'consumo');
        this.getCarrinhoVenda();
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma consumo disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Consumos obtidos com sucesso';
      },
    });
  }

  getCarrinhoVenda() {
    this.service.getCarrinho().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma consumo disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Consumos obtidos com sucesso';
      },
    });
  }

  finalizarBalcao() {
    this.router.navigate(['Carrinho/Venda/Fechamento']);
  }

  LimparBalcao() {
    this.service.delTodoConsumo().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.notification.showInfo(result.msgSaida[0], 'consumo');
        this.getCarrinhoVenda();
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma consumo disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Consumos obtidos com sucesso';
      },
    });
  }

}
