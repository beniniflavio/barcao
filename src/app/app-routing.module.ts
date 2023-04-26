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

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'Movimento', component: MovimentoComponent },
  {path:'Movimento/Abrir', component: AbrirComponent },
  {path:'Mesas', component: MesasComponent },
  {path:'Balcão', component: BalcaoComponent },
  {path:'Delivery', component: DeliveryComponent },
  {path:'Eventos', component: EventosComponent},
  {path:'Consumo', component: ConsumoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
