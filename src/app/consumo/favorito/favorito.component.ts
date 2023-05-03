import { Component, OnInit } from '@angular/core';
import { FavoritoService } from './favorito.service';
import { NotficationService } from 'src/app/services/notfication.service';


@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  wrapper:any;
  mensagem:any;
  success:any;

  constructor(private service:FavoritoService,
    private notification: NotficationService) { }

  ngOnInit(): void {
    /*this.notification.showInfo('buscando favoritos', 'consumo'); */
    this.service.getFavoritos().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma favoritos disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'favoritos obtidos com sucesso';
      },
    })
  }



}
