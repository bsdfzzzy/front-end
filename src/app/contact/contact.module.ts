import { contactRoutes } from './contact.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";
import { GaodeMapComponent } from "./gaode-map/gaode-map.component";
import { AmapComponent } from "./gaode-map/amap/amap.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(contactRoutes),
  ],
  declarations: [
    ContactComponent,
    GaodeMapComponent,
    AmapComponent
  ]
})
export class ContactModule { }
