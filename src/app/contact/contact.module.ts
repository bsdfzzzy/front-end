import { contactRoutes } from './contact.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(contactRoutes),
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
