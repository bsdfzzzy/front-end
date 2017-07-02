import { VisionComponent } from './vision/vision.component';
import { ValueComponent } from './value/value.component';
import { TeamComponent } from './team/team.component';
import { MissionComponent } from './mission/mission.component';
import { HuanyuComponent } from './huanyu/huanyu.component';
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
    AboutComponent,
    HuanyuComponent,
    MissionComponent,
    TeamComponent,
    ValueComponent,
    VisionComponent
  ]
})
export class AboutModule { }
