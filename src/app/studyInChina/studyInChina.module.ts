import { studyInChinaRoutes } from './studyInChina.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyInChinaComponent } from "./studyInChina.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(studyInChinaRoutes),
  ],
  declarations: [
    StudyInChinaComponent
  ]
})
export class StudyInChinaModule { }
