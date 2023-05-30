import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PersonalizadoService } from './personalizado.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MensagemService } from './mensagem/mensagem.service';
import { NgForm } from '@angular/forms';
import { NotficationService } from 'src/app/services/notfication.service';

declare var window: any;

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.css'],
})
export class PersonalizadoComponent implements OnInit {
  wrapper: any;
  wrapperGrupo: any;
  wrapperMRCM: any;
  wrapperMRAD: any;
  wrapperMSG: any;
  mensagem: any;
  success: any;
  idhash: any;
  formModal: any;
  consumidor: any | null;

  @Input() bodyText = ' Modal';

  constructor(
    private service: PersonalizadoService,
    private route: ActivatedRoute,
    private router: Router,
    private msg_service: MensagemService,
    private notification: NotficationService
  ) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );

    this.route.params.subscribe((params: Params) => {
      this.idhash = params['id'];
    });
    this.getMercadoria();
    //this.getMercadoriaComponente(this.idhash);
    // this.getMercadoriaAdicional(this.idhash);
    this.getMensagems();
  }
  getMercadoria() {
    this.service.getMercadoria(this.idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadoria obtida com sucesso';
      },
    });
  }

  getMercadoriaComponente(idhash: any) {
    this.service.getMercadoriaComponentes(idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapperMRCM = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadoria obtida com sucesso';
      },
    });
  }

  getMercadoriaAdicional(idhash: any) {
    this.service.getMercadoriaAdicional(idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapperMRAD = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadoria Adicional obtida com sucesso';
      },
    });
  }

  addComponente(comp: any) {
    this.wrapper.msgSaida[0].ingredientes.push(comp);
    this.totalizacao();
  }

  delComponente(idx: any) {
    this.wrapper.msgSaida[0].ingredientes[idx].situacao = 1;
    this.totalizacao();
  }

  recComponente(idx: any) {
    this.wrapper.msgSaida[0].ingredientes[idx].situacao = 0;
    this.totalizacao();
  }

  sndConsumo(idhash: any) {
    this.router.navigate(['Grupo/' + idhash]);
  }
  sndFinalizar() {
    this.openFormModal();

    let a = 0;
  }

  totalizacao() {
    var total = 0;
    var subtotal = 0;
    for (
      let index = 0;
      index < this.wrapper.msgSaida[0].ingredientes.length;
      index++
    ) {
      if (
        this.wrapper.msgSaida[0].ingredientes[index].tipo == 1 &&
        this.wrapper.msgSaida[0].ingredientes[index].situacao == 0
      ) {
        subtotal += this.wrapper.msgSaida[0].ingredientes[index].valor;
      }
    }
    this.wrapper.msgSaida[0].total_adicionais = subtotal;
    this.wrapper.msgSaida[0].total =
      this.wrapper.msgSaida[0].subtotal +
      this.wrapper.msgSaida[0].total_adicionais;
  }

  getMensagems() {
    return this.msg_service.getMensagens().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapperMSG = result;
        this.notification.showInfo('buscando grupos', 'consumo');
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mensagem disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mensagens obtida com sucesso';
      },
    });
  }

  openFormModal() {
    var com = document.getElementById('consumidor') as HTMLInputElement;
    com.value = this.wrapper.msgSaida[0].consumidor;
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
    this.wrapper.msgSaida[0].consumidor = (
      document.getElementById('consumidor') as HTMLInputElement
    ).value;
    this.service.setFinalizaConsumo(this.wrapper.msgSaida[0]).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapperMSG = result;
        this.notification.showSuccess(
          'Consumo Registrado com sucesso',
          'consumo'
        );

          this.router.navigate(['Consumo/']);

      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mensagem disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mensagens obtida com sucesso';
      },
    });
  }

  saveConsumidor() {
    this.formModal.hide();
    this.wrapper.msgSaida[0].consumidor = (
      document.getElementById('consumidor') as HTMLInputElement
    ).value;
  }
}
