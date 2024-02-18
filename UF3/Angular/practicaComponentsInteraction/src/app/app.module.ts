import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponentComponent } from './components/father-component/father-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
