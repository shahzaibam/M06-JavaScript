import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {NgForOf, NgIf} from "@angular/common";
import { IdentificarComponent } from './components/identificar/identificar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuisomComponent } from './components/quisom/quisom.component';
import { CistellaComponent } from './components/cistella/cistella.component';
import { AreaPrivadaComponent } from './components/area-privada/area-privada.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import {DniValidatorDirective} from "./dniValidator/dni-validator.directive";
import { ColleccionsComponent } from './components/colleccions/colleccions.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    IdentificarComponent,
    QuisomComponent,
    CistellaComponent,
    AreaPrivadaComponent,
    LogOutComponent,
    DniValidatorDirective,
    ColleccionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIf,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
