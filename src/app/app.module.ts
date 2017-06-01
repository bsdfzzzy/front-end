import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import "hammerjs";

import { AppComponent } from './app.component';
import { appRoutes } from "./app.routes";
import { HomeModule } from "./home/home.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
