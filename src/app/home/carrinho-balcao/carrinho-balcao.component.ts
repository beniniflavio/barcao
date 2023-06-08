import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { NotficationService } from 'src/app/services/notfication.service';
import { ContaRS } from 'src/app/model/data/ContaData';

@Component({
  selector: 'app-carrinho-balcao',
  templateUrl: './carrinho-balcao.component.html',
  styleUrls: ['./carrinho-balcao.component.css'],
})
export class CarrinhoBalcaoComponent implements OnInit {
  wrapper: any;
  mensagem: any;
  success: any;

  constructor(
    private service: AdminService,
    private notification: NotficationService,
    private router: Router
  ) {}
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1000,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 200,
    overflow: false,
  };
  data!: CloudData[];
  ngOnInit(): void {
    this.getCarrinhoVenda();

    this.data = [
      {
        text: 'weight-5-rotate(+10)',
        weight: 1,
        rotate: 10,
        tooltip: 'tooltip w1-color',
      },
      {
        text: 'weight-7-rotate(-20)',
        weight: 1,
        rotate: 9,
        tooltip: 'tooltip w1-color',
      },
      {
        text: 'weight-9-rotate(+35)',
        weight: 1,
        rotate: 35,
        tooltip: 'tooltip w1-color',
      },
    ];
  }

  getCarrinhoVenda() {
    this.service.getCarrinho().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        this.wrapper.msgSaida[0].resumo = this.consolidaQuantidade(this.wrapper.msgSaida[0].resumo);
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

  consolidaQuantidade(r:ContaRS[]) {
      let resumo : ContaRS[] = [];
      let merc = '';
      let qtf = 0.0;
      let sbt = 0.0;
      r.forEach( element => {
        if (element.mercadoria == merc) {
          resumo[resumo.length-1].subtotal += element.subtotal
          resumo[resumo.length-1].quantidade +=element.quantidade;
        } else {
            merc = element.mercadoria;
            resumo.push(element);
        }
      })
      return resumo;
  }
}
