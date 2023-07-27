import { Component, OnInit } from '@angular/core';
import { VendaMercadoriaService } from './venda-mercadoria.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotficationService } from 'src/app/services/notfication.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-venda-mercadoria',
  templateUrl: './venda-mercadoria.component.html',
  styleUrls: ['./venda-mercadoria.component.css']
})
export class VendaMercadoriaComponent implements OnInit {

  formulario!:FormGroup;

  wrapper: any;
  mensagem: any;
  success: any;
  idhash: any;
  idhashgrupo:any;

  constructor(private service:VendaMercadoriaService,
    private route: ActivatedRoute,
    private notification: NotficationService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idhash = params['id'];
    });

    this.getMercadoria();

  }

  onSubmit() {
      this.addConsumo(this.formulario.value);
  }

  getMercadoria() {
    this.service.getMercadoria(this.idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        this.idhashgrupo = this.wrapper.msgSaida[0].grupo.id ;
        this.createForm();
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadoria obtida com sucesso';
      },
    })

  }

  createForm() {
    this.formulario = new FormGroup({
      chave: new FormControl(),
      quantidade: new FormControl(),
    });
    this.formulario.setValue({
      chave: this.wrapper.msgSaida[0].id,
      quantidade: 1,
    })
  }

  addConsumo(c : FormGroup) {

    this.service.addConsumo(c).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;

      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
        this.notification.showError('buscando favoritos', 'Consumo');
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Consumo registrado com sucesso';
        this.notification.showSuccess(this.mensagem, 'Consumo');
        this.router.navigate([ 'Consumo' ]);
      },
    })
  }

}
