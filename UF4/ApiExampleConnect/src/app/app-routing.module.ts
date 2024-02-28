import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGuardGuard } from './auth/my-guard.guard';
import { HomeComponentComponent } from './home-component/home-component.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';

const rutes: Routes = [

  { path: 'com1', component: Compo1Component },
  { path: 'com2',  component: Compo2Component, canActivate: [MyGuardGuard] },
  { path: 'home',  component: HomeComponentComponent },
  { path:'', redirectTo:'/com1', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(rutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
