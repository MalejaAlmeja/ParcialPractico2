import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AerolineaModule } from './aerolinea/aerolinea.module';
import { VueloModule } from './vuelo/vuelo.module';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AerolineaModule,
    VueloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
