import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuscripcioComponent } from "./components/suscripcio/suscripcio.component";
import { HomeComponent } from "./components/home/home.component";
import {LogOutComponent} from "./components/log-out/log-out.component";
import {QuisomComponent} from "./components/quisom/quisom.component";
import {AuthGuard} from "./guards/auth.guard";
import {CistellaComponent} from "./components/cistella/cistella.component";
import {ColleccionsComponent} from "./components/colleccions/colleccions.component";
import {AreaprivadaComponent} from "./components/areaprivada/areaprivada.component";
import {IdentificarComponent} from "./components/identificar/identificar.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'suscripcio', component: SuscripcioComponent },
  { path: 'logOut', component: LogOutComponent },
  { path: 'quisom', component: QuisomComponent, canActivate: [AuthGuard] },
  { path: 'cistella', component: CistellaComponent, canActivate: [AuthGuard] },
  { path: 'colleccions', component: ColleccionsComponent, canActivate: [AuthGuard] },
  { path: 'areaPrivada', component: AreaprivadaComponent, canActivate: [AuthGuard] },
  { path: 'identificar', component: IdentificarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
