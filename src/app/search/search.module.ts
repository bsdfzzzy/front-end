import { searchRoutes } from './search.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./search.component";
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(searchRoutes),
    CarouselModule.forRoot()
  ],
  declarations: [
    SearchComponent
  ]
})
export class SearchModule { }
