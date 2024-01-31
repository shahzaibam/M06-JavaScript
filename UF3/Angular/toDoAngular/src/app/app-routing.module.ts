import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TareasComponent} from "./components/tareas/tareas.component";
import {AddTareasComponent} from "./components/add-tareas/add-tareas.component";

const routes: Routes = [
  { path: 'addTodo', component: AddTareasComponent },
  { path: 'todoList', component: TareasComponent },
  { path: '', redirectTo: '/todoList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
