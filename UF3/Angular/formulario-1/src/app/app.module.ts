import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MayorEdadDirectiveDirective } from './mayor-edad-directive.directive';
import { ValidarPasswordDirective } from './validarPassword/validar-password.directive';
import { ValidarNombreDirective } from './validarNombre/validar-nombre.directive';
import { ValidarEmailDirective } from './validarEmail/validar-email.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MayorEdadDirectiveDirective,
    ValidarPasswordDirective,
    ValidarNombreDirective,
    ValidarEmailDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
