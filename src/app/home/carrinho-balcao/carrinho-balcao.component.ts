import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-carrinho-balcao',
  templateUrl: './carrinho-balcao.component.html',
  styleUrls: ['./carrinho-balcao.component.css'],
})
export class CarrinhoBalcaoComponent implements OnInit {
  wrapper: any;
  mensagem: any;
  success: any;

  constructor(private service: AdminService,
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

     this.data= [
      { text: 'weight-5-rotate(+10)', weight: 1, rotate: 10,  tooltip: "tooltip w1-color" },
      { text: 'weight-7-rotate(-20)', weight: 1, rotate: 9 ,  tooltip: "tooltip w1-color"},
      { text: 'weight-9-rotate(+35)', weight: 1, rotate: 35,  tooltip: "tooltip w1-color" },

    ];
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
    this.router.navigate([ 'Carrinho/Venda' ]);
  }
}
