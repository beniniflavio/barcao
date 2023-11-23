import { Component, Input, OnInit } from '@angular/core';
import { ContaService } from './conta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContaRS } from 'src/app/model/data/ContaData';
import { VendaPagamentoRS } from 'src/app/model/data/VendaPagamentoData';
import { NotficationService } from 'src/app/services/notfication.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

declare var window: any;


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css'],
})
export class ContaComponent implements OnInit {
  wrapper: any;
  wrapperPagamento: any;
  mensagem: any;
  success: any;
  idhash: any;
  conta: any;
  wrapperResumo: ContaRS[] = [];
  formModal: any;
  pagamento!: VendaPagamentoRS;
  operacao: any;
  situacao : any;
  financeiro: any;
  exibe : any;


  formErrors: String[] = [];

  @Input() valor: any;

  formulario!: FormGroup;

  constructor(
    private service: ContaService,
    private route: ActivatedRoute,
    private notification: NotficationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.routeConfig!.path!.includes('Balcao')) {
      this.operacao = 'Balcao';
      this.valor = 0.0;
      this.financeiro = 'registra';
      this.formModal = new window.bootstrap.Modal(
        document.getElementById('myModal')
      );

      this.route.params.subscribe((params: Params) => {
        this.idhash = params['id'];
      });

      this.getbalcao(this.idhash);
      this.conta = 'detalhe';

    } else {
      this.operacao = 'Mesa';
      this.valor = 0.0;
      this.financeiro = 'registra';
      this.formModal = new window.bootstrap.Modal(
        document.getElementById('myModal')
      );

      this.route.params.subscribe((params: Params) => {
        this.idhash = params['id'];
      });

      this.getMesa(this.idhash);
      this.conta = 'detalhe';
    }
  }

  getMesa(idhash: any) {
    this.service.getMesa(idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        this.wrapperResumo = this.consolidaQuantidade(
          this.wrapper.msgSaida[0].consumos
        );

        this.ValidaFinanceiro();
        this.createFormMesa(this.pagamento);
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

  getbalcao(idhash: any) {
    this.service.getBalcao(idhash).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        this.situacao = this.wrapper.msgSaida[0].balcao.situacao;
        this.wrapperResumo = this.consolidaQuantidade(
          this.wrapper.msgSaida[0].consumos
        );

        this.ValidaFinanceiro();
        this.createFormBalcao(this.pagamento);
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

  showPagamentos() {
    this.conta = 'pagamento';
    this.exibe =  null;
  }

  showDetalhe() {
    this.conta = 'detalhe';

  }

  showResumo() {
    this.conta = 'resumo';
    this.exibe =  null;
  }

  consolidaQuantidade(vm: any) {
    let resumo: ContaRS[] = [];
    let merc = '';
    let qtf = 0.0;
    let sbt = 0.0;
    vm.forEach((element: any) => {
      if (element.mercadoria.nome == merc) {
        resumo[resumo.length - 1].quantidade += 1;
        resumo[resumo.length - 1].subtotal =
          resumo[resumo.length - 1].quantidade * element.mercadoria.valor;
      } else {
        let cnt = new ContaRS();
        cnt.chave = element.id;
        cnt.mercadoria = element.mercadoria.nome;
        cnt.preco = element.mercadoria.valor;
        cnt.quantidade = 1;
        cnt.subtotal = element.mercadoria.valor;
        merc = element.mercadoria.nome;
        resumo.push(cnt);
      }
    });
    return resumo;
  }

  sndFinalizar() {
    this.service.setFechaPagamento(this.wrapper.msgSaida[0].mesa.id).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        if (this.wrapper.msgSaida[0] == 'OK') {
          this.notification.showSuccess('Venda fechada com sucesso!', 'Venda');
          this.router.navigate(['Mesas']);
        } else {
          this.notification.showInfo(
            'Ocorreu um erro tente novamente!',
            'Venda'
          );
        }
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

  sndFinalizarBalcao() {
    this.service.setFechaPagamentoBalcao(this.wrapper.msgSaida[0].balcao.id).subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.wrapper = result;
        if (this.wrapper.msgSaida[0] == 'OK') {
          this.notification.showSuccess('Venda fechada com sucesso!', 'Venda');
          this.router.navigate(['Balcão']);
        } else {
          this.notification.showInfo(
            'Ocorreu um erro tente novamente!',
            'Venda'
          );
        }
      },
      error: (err: any) => {
        this.mensagem = 'Nenhuma venda disponível';
      },
      complete: () => {
        this.success = true;
        this.mensagem = 'venda selecionadas com sucesso';
      },
    });
  }


  sndPagamento() {
    this.openFormModal();
    let a = 0;
  }

  openFormModal() {
    //var com = document.getElementById('total') as HTMLInputElement;
    //com.value = (this.wrapper.msgSaida[0].total).toFixed(2);
    this.formModal.show();
  }

  saveSomeThing() {
    if (this.operacao == 'Balcao') {
      this.subPagamentoBalcao();
    } else {
      this.subPagamentoMesa();
    }
  }

  subPagamentoBalcao() {
    this.formErrors = [];
    let erro = 0;

    if (this.formulario.controls['valor'].errors?.['min']) {
      this.formErrors.push('Valor Inválido');
      erro = erro + 1;
    } else if (this.formulario.controls['valor'].errors?.['max']) {
      this.formErrors.push(
        'Valor maior que saldo a pagar ( R$' +
          this.wrapper.msgSaida[0].total.toFixed(2) +
          ' )'
      );
      erro = erro + 1;
    } else {
      this.formErrors.push('');
    }

    let frm = (document.getElementById('forma') as HTMLInputElement).value;

    if (frm == '') {
      this.formErrors.push('forma é obrigatório');
      erro = erro + 1;
    } else {
      this.formErrors.push('');
    }
    if (erro == 0) {
      this.formModal.hide();
      this.service.setPagamentoBalcao(this.formulario).subscribe({
        next: (result: any) => {
          // this.usersList?.push(result);
          this.wrapper = result;
          this.createFormBalcao(this.pagamento);
          this.ValidaFinanceiro();
          this.notification.showSuccess('Pagamento efetuado com sucesso!', 'Venda');
          //window.location.reload(false);
        },
        error: (err: any) => {
          this.mensagem = 'Nenhuma Venda disponível';
        },
        complete: () => {
          this.success = true;
          this.mensagem = 'Venda selecionadas com sucesso';
        },
      });
    }
  }

  subPagamentoMesa() {
    this.formErrors = [];
    let erro = 0;

    if (this.formulario.controls['valor'].errors?.['min']) {
      this.formErrors.push('Valor menor que Zero');
      erro = erro + 1;
    } else if (this.formulario.controls['valor'].errors?.['max']) {
      this.formErrors.push(
        'Valor maior que saldo a pagar ( R$' +
          this.wrapper.msgSaida[0].total.toFixed(2) +
          ' )'
      );
      erro = erro + 1;
    } else {
      this.formErrors.push('');
    }

    let frm = (document.getElementById('forma') as HTMLInputElement).value;

    if (frm == '') {
      this.formErrors.push('forma é obrigatório');
      erro = erro + 1;
    } else {
      this.formErrors.push('');
    }
    if (erro == 0) {
      this.formModal.hide();
      this.service.setPagamento(this.formulario).subscribe({
        next: (result: any) => {
          // this.usersList?.push(result);
          this.wrapper = result;
          this.createFormMesa(this.pagamento);
          this.ValidaFinanceiro();
          this.notification.showSuccess('Pagamento Efetuado com sucesso!', 'Venda');
          //window.location.reload(false);
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
  }

  ValidaFinanceiro() {
    if (this.totalizaPagamentos() >= this.wrapper.msgSaida[0].total) {
      this.financeiro = 'fecha';
    } else {
      this.financeiro = 'registra';
    }
  }

  createFormMesa(p: VendaPagamentoRS) {
    if (p == null) {
      this.pagamento = new VendaPagamentoRS();
      this.pagamento.mesa = this.wrapper.msgSaida[0].mesa.id;
      this.pagamento.chave = '';
      this.pagamento.descricao = '';
      this.pagamento.valor =
        this.wrapper.msgSaida[0].total - this.totalizaPagamentos();
      this.pagamento.forma = -1;
    } else {
      this.pagamento = new VendaPagamentoRS();
      this.pagamento.mesa = this.wrapper.msgSaida[0].mesa.id;
      this.pagamento.chave = '';
      this.pagamento.descricao = '';
      this.pagamento.valor =
        this.wrapper.msgSaida[0].total - this.totalizaPagamentos();
      this.pagamento.forma = -1;
    }

    this.formulario = new FormGroup({
      mesa: new FormControl(this.pagamento.mesa, []),
      valor: new FormControl(this.pagamento.valor, [
        Validators.requiredTrue,
        Validators.min(0),
        Validators.max(this.pagamento.valor),
      ]),
      descricao: new FormControl(this.pagamento.descricao, []),
      forma: new FormControl(this.pagamento.forma, [Validators.requiredTrue]),
    });
  }

  createFormBalcao(p: VendaPagamentoRS) {
    if (p == null) {
      this.pagamento = new VendaPagamentoRS();
      this.pagamento.mesa = ''
      this.pagamento.chave = this.wrapper.msgSaida[0].balcao.id;
      this.pagamento.consumidor = this.wrapper.msgSaida[0].balcao.consumidor;
      this.pagamento.descricao = '';
      this.pagamento.valor =
        this.wrapper.msgSaida[0].total - this.totalizaPagamentos();
      this.pagamento.forma = -1;
    } else {
      this.pagamento = new VendaPagamentoRS();
      this.pagamento.mesa = ''
      this.pagamento.chave = this.wrapper.msgSaida[0].balcao.id;
      this.pagamento.consumidor = this.wrapper.msgSaida[0].balcao.consumidor;
      this.pagamento.descricao = '';
      this.pagamento.valor =
        this.wrapper.msgSaida[0].total - this.totalizaPagamentos();
      this.pagamento.forma = -1;
    }

    this.formulario = new FormGroup({
      mesa: new FormControl('', []),
      chave: new FormControl(this.pagamento.chave, []),
      consumidor: new FormControl(this.pagamento.consumidor, []),
      valor: new FormControl(this.pagamento.valor, [
        Validators.requiredTrue,
        Validators.min(0.01),
        Validators.max(this.pagamento.valor),
      ]),
      descricao: new FormControl(this.pagamento.descricao, []),
      forma: new FormControl(this.pagamento.forma, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    this.formulario.value;
  }
  delPagamento(p: any) {
    if (this.operacao == 'Balcao' ) {
      this.delPagamentoBalcao(p);
    } else {
      this.delPagamentoMesa(p) ;
    }
    this.notification.showSuccess('Exclusão efetuada com sucesso!', 'Venda');
  }

  delPagamentoMesa(p: any) {
    this.service
      .getDelPagamento(this.wrapper.msgSaida[0].mesa.id, p)
      .subscribe({
        next: (result: any) => {
          // this.usersList?.push(result);
          this.wrapper = result;
          this.ValidaFinanceiro();
          this.createFormMesa(this.pagamento);
          //window.location.reload(false);
        },
        error: (err: any) => {
          this.mensagem = 'Nenhuma mesa disponível';
        },
        complete: () => {
          this.success = true;
          this.mensagem = 'Mesa selecionadas com sucesso';
        },
      });
    this.createFormMesa(this.pagamento);
  }

  delPagamentoBalcao(p: any) {
    this.service
      .getDelPagamentoBalcao(p, this.wrapper.msgSaida[0].balcao.id)
      .subscribe({
        next: (result: any) => {
          // this.usersList?.push(result);
          this.wrapper = result;
          this.ValidaFinanceiro();
          this.createFormBalcao(this.pagamento);
          //window.location.reload(false);
        },
        error: (err: any) => {
          this.mensagem = 'Nenhuma mesa disponível';
        },
        complete: () => {
          this.success = true;
          this.mensagem = 'Mesa selecionadas com sucesso';
        },
      });
    this.createFormBalcao(this.pagamento);
  }

  totalizaPagamentos() {
    return this.wrapper.msgSaida[0].pagamentos.reduce(
      (ac: number, cr: any) => ac + cr.valor,
      0
    );
  }


  sndEntregar(idhash : string) {

    this.service.setEntregar(this.wrapper.msgSaida[0].balcao.id)
    .subscribe({
      next: (result: any) => {
        // this.usersList?.push(result);
        this.notification.showSuccess('Entrega concluida com sucesso!', 'Venda');
        this.router.navigate(['Balcão']);
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

  setViewItem(idhash :any) {
    this.exibe =  idhash;


  }
}
