import { Component, OnInit, Input } from '@angular/core';
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
  mensagem: any;
  success: any;

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
        this.mensagem = 'Nenhuma mensagem disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mensagens obtida com sucesso';
      },
    });
  }

  setMensagem(m:any) {
    if (m.situacao == 0 ) {
        m.situacao = 1;
    } else {
      m.situacao = 0;
    };
  }

}
