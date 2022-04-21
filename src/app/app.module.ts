import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from "./material-module";
import {MainComponent} from "./pages/main/main.component";
import {Page404Component} from "./pages/page404/page404.component";
import {ExpandingCardsComponent} from "./projects/expanding-cards/expanding-cards.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProjsComponent} from "./components/projs/projs.component";
import { ProgressStepsComponent } from './projects/progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './projects/rotating-navigation/rotating-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandingCardsComponent,
    Page404Component,
    MainComponent,
    HeaderComponent,
    ProjsComponent,
    ProgressStepsComponent,
    RotatingNavigationComponent
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
