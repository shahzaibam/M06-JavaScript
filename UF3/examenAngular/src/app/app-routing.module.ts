import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {IdentificarComponent} from "./components/identificar/identificar.component";
import {QuisomComponent} from "./components/quisom/quisom.component";
import {CistellaComponent} from "./components/cistella/cistella.component";
import {AreaPrivadaComponent} from "./components/area-privada/area-privada.component";
import {LogOutComponent} from "./components/log-out/log-out.component";
import {ColleccionsComponent} from "./components/colleccions/colleccions.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'identificar', component: IdentificarComponent},
  {path: 'quisom', component: QuisomComponent},
  {path: 'cistella', component: CistellaComponent},
  {path: 'areaPrivada', component: AreaPrivadaComponent},
  {path: 'logOut', component: LogOutComponent},
  {path: 'coleccions', component: ColleccionsComponent},
  {path: '**', component: NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
