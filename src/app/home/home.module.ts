import { homeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(homeRoutes),
    CarouselModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
