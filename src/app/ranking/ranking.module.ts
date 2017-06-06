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
    RankingComponent
  ]
})
export class RankingModule { }
