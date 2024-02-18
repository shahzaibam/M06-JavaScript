import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListThingsComponent } from './components/list-things/list-things.component';
import { NgxPaginationModule } from 'ngx-pagination'; // Importa solo una vez

@NgModule({
  declarations: [
    AppComponent,
    ListThingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule // Mantén esta importación única
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
