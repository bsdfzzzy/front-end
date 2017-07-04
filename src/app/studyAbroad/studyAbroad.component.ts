import { getTypeIdService } from './service/getTypeId.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { studyAbroadService } from "./service/studyAbroad.service";

@Component({
  selector: 'studyAbroad-root',
  templateUrl: './studyAbroad.component.html',
  styleUrls: ['./studyAbroad.component.css'],
  providers:[
    studyAbroadService,
    getTypeIdService
    ]
})
export class studyAbroadComponent implements OnInit{
  typeid:number;
  constructor(
    public activeRoute:ActivatedRoute,
    public studyAbroadService:studyAbroadService,
    public router:Router,
    public getTypeIdService:getTypeIdService
  ){}

  ngOnInit() {
    // this.typeid = this.getTypeIdService.setTypeId();
  }


}