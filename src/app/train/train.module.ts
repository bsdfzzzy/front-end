import { trainRoutes } from './train.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainComponent } from "./train.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(trainRoutes),
  ],
  declarations: [
    TrainComponent
  ]
})
export class TrainModule { }
