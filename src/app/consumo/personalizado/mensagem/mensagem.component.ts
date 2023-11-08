import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MensagemService } from './mensagem.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';


@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() wrapper: any;
  @Input()  index: any;
  mensagems: any;
  success: any;

  @Output() mensagem = new EventEmitter();

  constructor(private service:MensagemService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.getMensagens();
  }

  getMensagens() {
    return this.service.getMensagens().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagems = 'Nenhuma mensagem disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagems = 'mensagens obtida com sucesso';
      },
    });
  }

  setMensagem(m:any) {
    if (m.situacao == 0 ) {
        m.situacao = 1;
        this.mensagem.emit(m);
    } else {
      m.situacao = 0;
    };
  }

}
