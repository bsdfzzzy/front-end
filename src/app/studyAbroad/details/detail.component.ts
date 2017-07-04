import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { studyAbroadService } from "../service/studyAbroad.service";


@Component({
  selector: 'detail-root',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class detailComponent implements OnInit {
    selectid:number;
    content:Array<object>;
    length:number;
    typeid:number;
    constructor(
      public activeRoute:ActivatedRoute,
      public studyAbroadService:studyAbroadService,
      public router:Router
      ){}

    ngOnInit(){
        this.activeRoute.params.subscribe(
          params => { 
            this.selectid = parseInt(params.docid);
            this.typeid = parseInt(params.typeid);
            console.log(this.typeid);
          }
        );
        this.loadSource(this.typeid);
      }

    public loadSource(typeid){
      this.studyAbroadService.getstudyAbroaddata(typeid).subscribe(
          res=>{
            this.content = res["content"];
            this.length = this.content.length;
            console.log(this.length,typeid);
          },
          error => {console.log(error)},
          () => {}
        );
    }
    public go(id){
      this.selectid = id;
      console.log(this.selectid);
    }
    public golist(){
      switch(this.typeid){
        case 1: this.router.navigate(['studyAbroad/example']); break;
        
        default:break;
      }
    }
}
