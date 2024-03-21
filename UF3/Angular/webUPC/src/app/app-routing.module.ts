import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {EventComponent} from "./components/event/event.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";
import {ContactusComponent} from "./components/contactus/contactus.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./auth/auth.guard";
import {TournamentsComponent} from "./components/tournaments/tournaments.component";
import {DashboardEmpresaComponent} from "./components/dashboard-empresa/dashboard-empresa.component";
import {UserTypeGuard} from "./userType/user-type.guard";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'dashboardEmpresa', component: DashboardEmpresaComponent, canActivate: [UserTypeGuard, AuthGuard]},
  {path: 'dashboardAutonomo', component: DashboardComponent, canActivate: [UserTypeGuard, AuthGuard]},
  {path: 'tournaments', component: TournamentsComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
