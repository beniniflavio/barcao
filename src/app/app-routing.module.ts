import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovimentoComponent } from './admin/movimento/movimento.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'Movimento', component: MovimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
