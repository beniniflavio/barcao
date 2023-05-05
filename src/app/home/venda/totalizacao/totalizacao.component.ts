import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoData } from 'src/app/model/data/CarrinhoData';
@Component({
  selector: 'app-totalizacao',
  templateUrl: './totalizacao.component.html',
  styleUrls: ['./totalizacao.component.css']
})
export class TotalizacaoComponent implements OnInit {

  constructor() { }

  @Input() totaliza :any;

  ngOnInit(): void {
    let a =1;
  }

}
