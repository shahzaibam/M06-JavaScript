import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuscripcioComponent } from './components/suscripcio/suscripcio.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtInterceptor} from "./interceptor/jwt.interceptor";
import { DniValidatorDirective } from './dniValidator/dni-validator.directive';
import { LogOutComponent } from './components/log-out/log-out.component';
import { QuisomComponent } from './components/quisom/quisom.component';
import { ColleccionsComponent } from './components/colleccions/colleccions.component';
import { CistellaComponent } from './components/cistella/cistella.component';
import { AreaprivadaComponent } from './components/areaprivada/areaprivada.component';
import { IdentificarComponent } from './components/identificar/identificar.component';
@NgModule({
  declarations: [
    AppComponent,
    SuscripcioComponent,
    HomeComponent,
    MenuComponent,
    DniValidatorDirective,
    LogOutComponent,
    QuisomComponent,
    ColleccionsComponent,
    CistellaComponent,
    AreaprivadaComponent,
    IdentificarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
