import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalibraintParentComponent } from './components/calibraint-parent/calibraint-parent.component';
import { CalibraintChildComponent } from './components/calibraint-child/calibraint-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CalibraintParentComponent,
    CalibraintChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
