import { Component, OnInit } from '@angular/core';
import { BalcaoService } from './balcao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balcao',
  templateUrl: './balcao.component.html',
  styleUrls: ['./balcao.component.css']
})
export class BalcaoComponent implements OnInit {

  success:any;
  mensagem:any;
  wrapper:any;

  constructor(private service: BalcaoService,
    private router:Router,) { }

  ngOnInit(): void {

    this.service.getBalcao().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma venda no balcao disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Balcao selecionadas com sucesso';
      },
    });

  }

  getContaBalcao(idhash:any) {
    this.router.navigate(['Balcao/Conta/' + idhash]);

  }

}
