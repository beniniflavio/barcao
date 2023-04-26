import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
