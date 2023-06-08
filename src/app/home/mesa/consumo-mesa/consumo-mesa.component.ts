import { MensagemComponent } from './../../../consumo/personalizado/mensagem/mensagem.component';
import { MesasService } from 'src/app/services/mesas.service';
import { Component, OnInit } from '@angular/core';
import { ConsumoMesaService } from './consumo-mesa.service';
import { NotficationService } from 'src/app/services/notfication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consumo-mesa',
  templateUrl: './consumo-mesa.component.html',
  styleUrls: ['./consumo-mesa.component.css']
})
export class ConsumoMesaComponent implements OnInit {


  wrapperConsumoMesa:any;
  wrapper:any;
  mensagem:any;
  success:any;

  constructor(private service:MesasService,
      private consumoMesa: ConsumoMesaService,
      private notification: NotficationService,
      private router:Router,
      ) { }

  ngOnInit(): void {
    this.service.getMesas().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mesa disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Mesa selecionadas com sucesso';
      },
    });
  }

  setMesa(idhash:any) {
    this.consumoMesa.SetMesa(idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapperConsumoMesa = result;
        this.notification.showInfo('Cosumo Registrado na Mesa', 'Consumo');
        setTimeout(this.contaMesa, 2000);
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mesa disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Mesa selecionadas com sucesso';
      },
    });
  }

  contaMesa(idhash:any) {
    alert();
    this.router.navigate(['Mesa/' + idhash])
  }



}
