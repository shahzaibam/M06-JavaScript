import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from "./formulario/formulario.component";
import {NotFoundComponent} from "./NotFoundComponent/not-found/not-found.component";

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
