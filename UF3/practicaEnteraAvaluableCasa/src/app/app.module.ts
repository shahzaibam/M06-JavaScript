import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuisomComponent} from "./components/quisom/quisom.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EquipComponent } from './components/equip/equip.component';
import { RegistreComponent } from './components/registre/registre.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { MerchandisingComponent } from './components/merchandising/merchandising.component';
import { CompraComponent } from './components/compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    QuisomComponent,
    NavBarComponent,
    EquipComponent,
    RegistreComponent,
    LoginComponent,
    MerchandisingComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
