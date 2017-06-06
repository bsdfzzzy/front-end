import { studyAbroadRoutes } from './studyAbroad.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studyAbroadComponent } from "./studyAbroad.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(studyAbroadRoutes),
  ],
  declarations: [
    studyAbroadComponent
  ]
})
export class studyAbroadModule { }
