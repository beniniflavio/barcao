import { Component, OnInit } from '@angular/core';
import { MercadoriasgrupoService } from './mercadoriasgrupo.service';
import { NotficationService } from 'src/app/services/notfication.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-mercadoriasgrupo',
  templateUrl: './mercadoriasgrupo.component.html',
  styleUrls: ['./mercadoriasgrupo.component.css'],
})
export class MercadoriasgrupoComponent implements OnInit {
  wrapper: any;
  wrapperGrupo: any;
  mensagem: any;
  success: any;
  idhash: any;

  constructor(
    private service: MercadoriasgrupoService,
    private route: ActivatedRoute,
    private notification: NotficationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idhash = params['id'];
    });
    this.getMercadoriasGrupo();
  }

  getMercadoriasGrupo() {
    this.notification.showInfo('buscando grupos', 'consumo');

    this.service.getMercadoriasGrupos(this.idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadorias obtidos com sucesso';
      },
    });
  }

  getConsumo(idhash: any) {
    this.router.navigate(['Consumo/' + idhash]);
  }
}
