import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistreComponent} from "./registre/registre.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {EquipComponent} from "./equip/equip.component";
import {QuiensomComponent} from "./quiensom/quiensom.component";
import {MerchandisingComponent} from "./merchandising/merchandising.component";
import {LogoutComponent} from "./logout/logout.component";


const routes: Routes = [
  {path: 'registre', component: RegistreComponent},
  {path: 'login', component: LoginComponent},
  {path: 'equip', component: EquipComponent},
  {path: 'quiensom', component: QuiensomComponent},
  {path: 'merchandising', component: MerchandisingComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
