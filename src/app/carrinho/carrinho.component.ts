import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotficationService } from 'src/app/services/notfication.service';



@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  wrapper: any;
  mensagem: any;
  success: any;

  constructor(private service:CarrinhoService,
    private route: ActivatedRoute,
    private notification: NotficationService,) { }

  ngOnInit(): void {
    setInterval(() => {
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
      })
    }
      , 2000);
  }

  getCarrinho() {
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
    })
  }

}
