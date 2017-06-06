import { cooperationRoutes } from './cooperation.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperationComponent } from "./cooperation.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(cooperationRoutes),
  ],
  declarations: [
    CooperationComponent
  ]
})
export class CooperationModule { }
