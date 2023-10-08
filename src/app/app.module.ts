import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { TagCloudComponent } from 'angular-tag-cloud-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MovimentoComponent } from './admin/movimento/movimento.component';
import { AbrirComponent } from './admin/movimento/abrir/abrir.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MesasComponent } from './home/mesas/mesas.component';
import { FiltroComponent } from './home/mesas/filtro/filtro.component';
import { BalcaoComponent } from './home/balcao/balcao.component';
import { DeliveryComponent } from './home/delivery/delivery.component';
import { EventosComponent } from './home/eventos/eventos.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { FavoritoComponent } from './consumo/favorito/favorito.component';
import { GruposComponent } from './consumo/grupos/grupos.component';
import { MercadoriasgrupoComponent } from './consumo/mercadoriasgrupo/mercadoriasgrupo.component';
import { VendaMercadoriaComponent } from './consumo/venda-mercadoria/venda-mercadoria.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoBalcaoComponent } from './home/carrinho-balcao/carrinho-balcao.component';
import VendaComponent from './home/venda/venda.component';
import { DynamicFormInputComponent } from './shared/dynamic-form-input/dynamic-form-input.component';
import { TotalizacaoComponent } from './home/venda/totalizacao/totalizacao.component';
import { PersonalizadoComponent } from './consumo/personalizado/personalizado.component';
import { MensagemComponent } from './consumo/personalizado/mensagem/mensagem.component';
import { FechamentoComponent } from './home/fechamento/fechamento.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ConsumoMesaComponent } from './home/mesa/consumo-mesa/consumo-mesa.component';
import { ContaComponent } from './home/mesa/conta/conta.component';
import { ConsumoBalcaoComponent } from './home/consumo-balcao/consumo-balcao.component';
import { VisualizarComponent } from './admin/movimento/visualizar/visualizar.component';
import { ResumoComponent } from './admin/movimento/resumo/resumo.component';
import { DetalheComponent } from './admin/movimento/detalhe/detalhe.component';
import { TipoComponent } from './admin/movimento/tipo/tipo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovimentoComponent,
    AbrirComponent,
    MesasComponent,
    FiltroComponent,
    BalcaoComponent,
    DeliveryComponent,
    EventosComponent,
    ConsumoComponent,
    FavoritoComponent,
    GruposComponent,
    MercadoriasgrupoComponent,
    VendaMercadoriaComponent,
    CarrinhoComponent,
    CarrinhoBalcaoComponent,
    VendaComponent,
    DynamicFormInputComponent,
    TotalizacaoComponent,
    PersonalizadoComponent,
    MensagemComponent,
    FechamentoComponent,
    PagamentoComponent,
    ConsumoMesaComponent,
    ContaComponent,
    ConsumoBalcaoComponent,
    VisualizarComponent,
    ResumoComponent,
    DetalheComponent,
    TipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        timeOut: 2000, // 15 seconds
        closeButton: true,
        progressBar: true,
    }),
    TagCloudComponent,

  ],
  providers: [ CommonModule, DatePipe ],
  bootstrap: [AppComponent],
})
export class AppModule { }

