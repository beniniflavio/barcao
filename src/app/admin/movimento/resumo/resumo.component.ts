import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  constructor() { }

  @Input() resumo:any;

  ngOnInit(): void {

  }

}
