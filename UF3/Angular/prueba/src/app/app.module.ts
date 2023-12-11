import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Componente1Component} from "./components/componente1/componente1.component";
import {Componente2Component} from "./components/componente2/componente2.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Componente1Component,
    Componente2Component,
    Componente1Component,
    Componente2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
