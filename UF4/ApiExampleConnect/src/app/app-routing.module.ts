import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProvesConnectarComponent} from "./components/proves-connectar/proves-connectar.component";


const routes: Routes = [
  {path: 'proves', component: ProvesConnectarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
