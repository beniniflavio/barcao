import { Component, OnInit } from '@angular/core';
import { GruposService } from './grupos.service';
import { NotficationService } from 'src/app/services/notfication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  wrapper: any;
  mensagem: any;
  success: any;

  constructor(
    private service: GruposService,
    private notification: NotficationService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    /* this.notification.showInfo('buscando grupos', 'consumo'); */

    this.service.getGrupos().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma grupo disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Grupos obtidos com sucesso';
      },
    })
  }

  mercadoriaGrupo(idhash:any) {
    this.router.navigate(['Grupo/' + idhash]);
  }
}
