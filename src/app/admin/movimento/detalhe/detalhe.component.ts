import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  constructor() { }

  @Input() detalhe : any;

  ngOnInit(): void {

  }

}
