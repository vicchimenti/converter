import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CentigradeComponent } from './components/centigrade/centigrade.component';
import { FahrenheitComponent } from './components/fahrenheit/fahrenheit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CentigradeComponent,
    FahrenheitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
