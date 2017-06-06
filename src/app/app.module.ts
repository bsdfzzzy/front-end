import { ButtonsModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from "./app.routes";
import { HomeModule } from "./home/home.module";
import { studyAbroadModule } from "./studyAbroad/studyAbroad.module";
import { AboutModule } from "./about/about.module";
import { RankingModule } from "./ranking/ranking.module";
import { TrainModule } from "./train/train.module";
import { StudyInChinaModule } from "./studyInChina/studyInChina.module";
import { AdvertiseModule } from "./advertise/advertise.module";
import { CooperationModule } from "./cooperation/cooperation.module";
import { ContactModule } from "./contact/contact.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    HomeModule,
    AboutModule,
    studyAbroadModule,
    RankingModule,
    TrainModule,
    StudyInChinaModule,
    AdvertiseModule,
    CooperationModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
