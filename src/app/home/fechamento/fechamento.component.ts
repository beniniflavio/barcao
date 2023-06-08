import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-fechamento',
  templateUrl: './fechamento.component.html',
  styleUrls: ['./fechamento.component.css']
})
export class FechamentoComponent implements OnInit {

  tipo : any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tipo = { "selecao":[{"descricao": "Mesa"}, {"descricao":"Balcão"}, {"descricao":"Delivery"}]
    }
  }


  tipoSelecionado(tipo:any ) {
    switch (tipo) {
      case 'Mesa': {
        this.router.navigate(['Carrinho/Venda/Mesa']);
        break
      }
      case 'Balcão': {
        this.router.navigate(['Carrinho/Venda/Balcao']);
        break;
      }
      case 'Delivery' : {
        this.router.navigate(['Carrinho/Venda/Fechamento']);
        break;
      }
    }

  }

}
