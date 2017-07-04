import { visaComponent } from './visa/visa.component';
import { studyOutsideComponent } from './studyOutside/studyOutside.component';
import { promotionComponent } from './promotion/promotion.component';
import { guideComponent } from './guide/guide.component';
import { exampleComponent } from './example/example.component';
import { examinationComponent } from './examination/examination.component';
import { assessAndPlanComponent } from './assessAndPlan/assessAndPlan.component';
import { FormsModule } from '@angular/forms';
import { studyAbroadRoutes } from './studyAbroad.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studyAbroadComponent } from "./studyAbroad.component";
import { listComponent } from "./list/list.component";
import { detailComponent } from "./details/detail.component";
import { PaginationModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(studyAbroadRoutes),
    FormsModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    studyAbroadComponent,
    listComponent,
    detailComponent,
    assessAndPlanComponent,
    examinationComponent,
    exampleComponent,
    guideComponent,
    promotionComponent,
    studyOutsideComponent,
    visaComponent
  ]
})
export class studyAbroadModule { }
