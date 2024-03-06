import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {TodoComponent} from "./components/todo/todo.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "todo", component: TodoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
