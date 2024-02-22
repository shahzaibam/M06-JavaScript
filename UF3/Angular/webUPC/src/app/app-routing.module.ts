import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {EventComponent} from "./components/event/event.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";
import {ContactusComponent} from "./components/contactus/contactus.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
