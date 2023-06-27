import { EventosComponent } from './home/eventos/eventos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovimentoComponent } from './admin/movimento/movimento.component';
import { AbrirComponent } from './admin/movimento/abrir/abrir.component';
import { MesasComponent } from './home/mesas/mesas.component';
import { BalcaoComponent } from './home/balcao/balcao.component';
import { DeliveryComponent} from './home/delivery/delivery.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { MercadoriasgrupoComponent } from './consumo/mercadoriasgrupo/mercadoriasgrupo.component';
import { VendaMercadoriaComponent } from './consumo/venda-mercadoria/venda-mercadoria.component';
import { CarrinhoBalcaoComponent } from './home/carrinho-balcao/carrinho-balcao.component';
import VendaComponent from './home/venda/venda.component';
import { PersonalizadoComponent } from './consumo/personalizado/personalizado.component';
import { FechamentoComponent } from './home/fechamento/fechamento.component';
import { ConsumoMesaComponent } from './home/mesa/consumo-mesa/consumo-mesa.component';
import { ContaComponent } from './home/mesa/conta/conta.component';


const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'Movimento', component: MovimentoComponent },
  {path:'Movimento/Abrir', component: AbrirComponent },
  {path:'Mesas', component: MesasComponent },
  {path:'Balcão', component: BalcaoComponent },
  {path:'Delivery', component: DeliveryComponent },
  {path:'Eventos', component: EventosComponent},
  {path:'Consumo', component: ConsumoComponent},
  {path:'Grupo/:id', component: MercadoriasgrupoComponent},
  {path:'Consumo/Personalizado/:id', component: PersonalizadoComponent},
  {path:'Consumo/:id', component: VendaMercadoriaComponent},
  {path:'Carrinho', component: CarrinhoBalcaoComponent},
  {path:'Carrinho/Venda/Fechamento', component: FechamentoComponent},
  {path:'Carrinho/Venda/Balcao', component: VendaComponent},
  {path:'Carrinho/Venda/Mesa', component: ConsumoMesaComponent},
  {path:'Mesa/Conta/:id', component: ContaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
