import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {EventComponent} from "./components/event/event.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";
import {ContactusComponent} from "./components/contactus/contactus.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LogoutComponent} from "./components/logout/logout.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
