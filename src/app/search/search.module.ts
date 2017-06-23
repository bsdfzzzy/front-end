import { FormsModule } from '@angular/forms';
import { searchRoutes } from './search.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./search.component";
import { CarouselModule } from "../carousel/carousel.module";
import { PaginationModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(searchRoutes),
    PaginationModule.forRoot(),
    FormsModule,
    CarouselModule
  ],
  declarations: [
    SearchComponent,
  ]
})
export class SearchModule { }
