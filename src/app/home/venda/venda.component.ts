import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormField } from 'src/app/model/FormField';
import { NotficationService } from 'src/app/services/notfication.service';
import { CarrinhoData } from 'src/app/model/data/CarrinhoData';
import { ConsumoBalcao } from 'src/app/model/data/ConsumoBalcao';
import { VendaService } from './venda.service';
import { formatNumber } from '@angular/common'

import { FormfieldControlService } from 'src/app/services/formfield-control.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css'],
})
export default class VendaComponent implements OnInit {
  formulario!: FormGroup;
  @Input() formFields: FormField<string>[] = [];

  wrapper: any;
  mensagem: any;
  success: any;
  wrappercarrinho:any;
  totaliza:any;
  total:any;


  crrd = new CarrinhoData();


  constructor(
    private service: AdminService,
    private formfieldService: FormfieldControlService,
    private notification: NotficationService,
    private vendaService:VendaService  ) {}

  ngOnInit(): void {
    this.getCarrinho();
    this.totaliza='F';
    this.total =0.0;
  }

  getCarrinho() {
    this.service.getCarrinho().subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
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
    this.vendaService.addConsumoBalcao(this.crrd).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrappercarrinho = result;

      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma mercadoria disponível';
        this.notification.showError('Erro no registro da venda', 'Venda Balcão');
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'mercadoria obtida com sucesso';
        this.notification.showSuccess('Venda Registra com Sucesso', 'Venda Balcão');
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
      this.total +=  element.mercadoria.valor;
      input = new FormField();
      input.controlType = 'textbox';
      input.key = element.mercadoria.id,
      input.label = element.mercadoria + ' - ' + this.formatvalor(element.mercadoria.valor),
      input.value = element.quantidade,
      input.type = 'number';
      input.required = false,
      input.order = i++;
      this.formFields.push(input);
    });
    this.formulario = this.formfieldService.toFormGroup(this.formFields);
  }

  getTotaliza(){
    this.getCarrinhoBalcao2();

  }

  formatvalor( valor:number) {
    return formatNumber(valor,"en-US", "1.2-3")
  }


  getCarrinhoBalcao() {
    this.total = 0;
    let key;
    let i = 0;
    for (key in this.formulario.getRawValue()) {
      if (i == 0 ) {
        this.crrd.chave='';
        this.crrd.consumidor = this.formulario.getRawValue()[key];
      } else {
        const csbl = new ConsumoBalcao();
        csbl.chave = key;
        csbl.valor = this.formulario.getRawValue()[key];
        this.total +=  this.formulario.getRawValue()[key];
        this.crrd.consumos.push(csbl);
      }
      i++;
    }
  }
  // this.wrapper.msgSaida[0].consumos.find(f=> f.id==element);

  getCarrinhoBalcao2() {
    // let key;
    // for (key in this.formulario.getRawValue()) {
      // this.wrapper.msgSaida[0].consumos.find(f=> f.id==key)
    // };

  }
}
