import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuisomComponent} from "./components/quisom/quisom.component";
import {EquipComponent} from "./components/equip/equip.component";
import {RegistreComponent} from "./components/registre/registre.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: 'quisom', component: QuisomComponent},
  {path: 'equip', component: EquipComponent},
  {path: 'registre', component: RegistreComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
