import { homeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(homeRoutes),
    MaterialModule,
    MdNativeDateModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
