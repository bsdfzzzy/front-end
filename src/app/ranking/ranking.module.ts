import { USAComponent } from './USA/USA.component';
import { THEComponent } from './THE/THE.component';
import { QSComponent } from './QS/QS.component';
import { ARWUComponent } from './ARWU/ARWU.component';
import { rankingRoutes } from './ranking.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from "./ranking.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(rankingRoutes),
  ],
  declarations: [
    RankingComponent,
    ARWUComponent,
    QSComponent,
    THEComponent,
    USAComponent
  ]
})
export class RankingModule { }
