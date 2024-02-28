import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGuardGuard } from './auth/my-guard.guard';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const rutes: Routes = [

  { path: 'com2', component: Com2Component },
  { path: 'com1',  component: Com1Component },
  { path: 'home',  component: HomeComponentComponent },
  { path:'', redirectTo:'/com1', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(rutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
