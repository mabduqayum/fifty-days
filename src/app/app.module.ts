import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from "./material-module";
import { HeaderComponent } from './header/header.component';
import { ProjsComponent } from './projs/projs.component';
import {ExpandingCardsComponent} from "./pages/expanding-cards/expanding-cards.component";
import {MainComponent} from "./pages/main/main.component";
import {Page404Component} from "./pages/page404/page404.component";

@NgModule({
  declarations: [
    AppComponent,
    ExpandingCardsComponent,
    Page404Component,
    MainComponent,
    HeaderComponent,
    ProjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
