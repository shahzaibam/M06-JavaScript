import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuisomComponent } from './components/quisom/quisom.component';
import { EquipComponent } from './components/equip/equip.component';
import { RegistreComponent } from './components/registre/registre.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        QuisomComponent,
        EquipComponent,
        RegistreComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        UpperCasePipe,
        NgIf,
        ReactiveFormsModule,
        NgIf
    ],
    providers: [],
    exports: [
        NavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
