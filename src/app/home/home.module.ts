import { homeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ScrollDirective } from "./carousel/carousel.directive";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [
    HomeComponent,
    CarouselComponent,
    ScrollDirective
  ]
})
export class HomeModule { }
