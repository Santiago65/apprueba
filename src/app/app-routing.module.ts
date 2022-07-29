import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSecionComponent } from './componentes/iniciar-sesion/iniciar-secion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/porfolio'},
  {path:'porfolio',component:PorfolioComponent, ...canActivate(() => redirectUnauthorizedTo (['iniciar-secion']))},
  {path: 'iniciar-secion',component:IniciarSecionComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
