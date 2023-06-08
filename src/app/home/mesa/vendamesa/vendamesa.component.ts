import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormField } from 'src/app/model/FormField';
import { NotficationService } from 'src/app/services/notfication.service';
import { CarrinhoData } from 'src/app/model/data/CarrinhoData';
import { ConsumoBalcao } from 'src/app/model/data/ConsumoBalcao';
import { formatNumber } from '@angular/common';
import { Router } from '@angular/router';
import { VendamesaService } from './vendamesa.service';
import { MesasService } from 'src/app/services/mesas.service';

import { FormfieldControlService } from 'src/app/services/formfield-control.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-vendamesa',
  templateUrl: './vendamesa.component.html',
  styleUrls: ['./vendamesa.component.css']
})
export class VendamesaComponent implements OnInit {

  formulario!: FormGroup;
  @Input() formFields: FormField<string>[] = [];

  wrapper: any;
  mensagem: any;
  success: any;
  wrappercarrinho: any;
  totaliza: any;
  total: any;

  wrapperMesa:any;

  crrd = new CarrinhoData();


  constructor(
    private service: AdminService,
    private formfieldService: FormfieldControlService,
    private notification: NotficationService,
    private router: Router,
    private msService : VendamesaService,
    private mesService : MesasService

  ) {}

  ngOnInit(): void {
    this.getCarrinho();
    this.totaliza = 'F';
    this.total = 0.0;
  }

  getCarrinho() {
    this.service.getCarrinho().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        this.total = this.formatvalor(this.wrapper.msgSaida[0].total);
        this.getConsumos(this.wrapper);
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

  onSubmit() {
    this.getCarrinhoBalcao();
    this.msService.addConsumoMesa(this.crrd).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrappercarrinho = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
        this.notification.showError(
          'Erro no registro da venda',
          'Venda Balcão'
        );
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadoria obtida com sucesso';
        this.notification.showSuccess(
          'Venda Registra com Sucesso',
          'Venda Balcão'
        );
      },
    });
  }

  getConsumos(consumos: any) {
    this.notification.showInfo('Montando Carrinho ', 'Consumo Balcão');
    let input: any;
    let i = 0;

    input = new FormField();
    input.controlType = 'textbox';
    input.key = 'Consumidor';
    input.value = '';
    input.type = 'textbox';
    input.label = 'Consumidor';
    (input.required = true), (input.order = 1);
    this.formFields.push(input);
    /*this.payLoad= '...carregando'; */
    consumos.msgSaida[0].resumo.forEach((element: any) => {
      this.total += element.mercadoria.valor;
      input = new FormField();
      input.controlType = 'textbox_action';
      (input.key = element.chave),
        (input.label =
          element.mercadoria +
          ' - R$' +
          this.formatvalor(element.preco) +
          ' Máximo: ( ' +
          element.quantidade +
          ' )'),
        (input.value = element.quantidade),
        (input.type = 'number');
      (input.required = false), (input.order = i++);
      input.amount = element.quantidade;
      input.price = this.formatvalor(element.preco);
      input.subtotal = this.formatvalor(element.quantidade * element.preco);
      this.formFields.push(input);
    });
    this.formulario = this.formfieldService.toFormGroup(this.formFields);
  }

  getTotaliza() {
    this.total = this.getTotalizaCarrinho();

  }

  formatvalor(valor: number) {
    return formatNumber(valor, 'en-US', '1.2-3');
  }

  getCarrinhoBalcao() {
    let key;
    let i = 0;
    for (key in this.formulario.getRawValue()) {
      if (i == 0) {
        this.crrd.chave = '';
        this.crrd.consumidor = this.formulario.getRawValue()[key];
      } else {
        const csbl = new ConsumoBalcao();
        csbl.chave = key;
        csbl.valor = this.formulario.getRawValue()[key];
        this.total += this.formulario.getRawValue()[key];
        this.crrd.consumos.push(csbl);
      }
      i++;
    }
  }

  getTotalizaCarrinho() {
    let key: any;
    var tt:number=0.0;
    for (key in this.formulario.value) {
      if (key != 'Consumidor') {
        let valor = document.getElementById(key + 'subtotal')!.textContent;
        if (valor != null) {
          tt += parseFloat(valor.trim());
        }
      }
    }
    return tt;
  }

  delConsumo(c: any) {
    this.service.delConsumo(c).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.notification.showInfo(result.msgSaida[0], 'consumo');
        this.getCarrinhoVenda();
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma consumo disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Consumos obtidos com sucesso';
      },
    });
  }
  getCarrinhoVenda() {
    this.service.getCarrinho().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma consumo disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Consumos obtidos com sucesso';
      },
    });
  }

  getMesas() {
    this.mesService.getMesas().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapperMesa = result;
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mesa disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'Mesas obtidos com sucesso';
      },
    });
  }

}
