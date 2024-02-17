import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuisomComponent} from "./components/quisom/quisom.component";
import {EquipComponent} from "./components/equip/equip.component";
import {RegistreComponent} from "./components/registre/registre.component";
import {LoginComponent} from "./components/login/login.component";
import {MerchandisingComponent} from "./components/merchandising/merchandising.component";
import {CompraComponent} from "./components/compra/compra.component";

const routes: Routes = [
  {path: 'quisom', component: QuisomComponent},
  {path: 'equip', component: EquipComponent},
  {path: 'register', component: RegistreComponent},
  {path: 'login', component: LoginComponent},
  {path: 'merchandising', component: MerchandisingComponent},
  {path: 'compra', component: CompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
