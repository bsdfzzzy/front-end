import { advertiseRoutes } from './advertise.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertiseComponent } from "./advertise.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(advertiseRoutes),
  ],
  declarations: [
    AdvertiseComponent
  ]
})
export class AdvertiseModule { }
