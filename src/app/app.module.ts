import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Accueil/accueil/accueil.component';

import { RessourcesComponent } from './Ressources/ressources/ressources.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CourComponent } from './Cours/cour/cour.component';
import { ErrorComponent } from './Accueil/error/error.component';
import { ProgComponent } from './Cours/prog/prog.component';
import { DesComponent } from './Cours/des/des.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
  
    RessourcesComponent,
    NavbarComponent,
    CourComponent,
    ErrorComponent,
    ProgComponent,
    DesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
