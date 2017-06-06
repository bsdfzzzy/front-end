import { aboutRoutes } from './about.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(aboutRoutes),
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
