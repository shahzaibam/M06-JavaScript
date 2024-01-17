import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from "./formulario/formulario.component";
import {NotFoundComponent} from "./NotFoundComponent/not-found/not-found.component";
import {ListadoUsuariosComponent} from "./listado-usuarios/listado-usuarios.component";

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'listado', component: ListadoUsuariosComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
