import { TOEFLComponent } from './TOEFL/TOEFL.component';
import { IETLSComponent } from './IETLS/IETLS.component';
import { GREComponent } from './GRE/GRE.component';
import { GMATComponent } from './GMAT/GMAT.component';
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
    TrainComponent,
    GMATComponent,
    GREComponent,
    IETLSComponent,
    TOEFLComponent
  ]
})
export class TrainModule { }
