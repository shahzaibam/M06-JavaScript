import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistreComponent } from './registre/registre.component';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import {LoginComponent} from "./login/login.component";
import { MenuComponent } from './menu/menu.component';
import {EquipComponent} from "./equip/equip.component";
import {MerchandisingComponent} from "./merchandising/merchandising.component";
import {QuiensomComponent} from "./quiensom/quiensom.component";
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    NotFoundComponent,
    LoginComponent,
    MenuComponent,
    EquipComponent,
    MerchandisingComponent,
    QuiensomComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonPipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
