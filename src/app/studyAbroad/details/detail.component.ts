import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
    constructor(
      public activeRoute:ActivatedRoute,
      public studyAbroadService:studyAbroadService,
      public router:Router
      ){}

    ngOnInit(){
        this.activeRoute.queryParams.subscribe(
          params => { 
            let paramslength:number = 0;
            console.log(paramslength);
            for(var js2 in params){
                paramslength = paramslength + 1;
              }
            this.selectid = parseInt(params[paramslength - 1]) + 10*(paramslength - 1);
          }
        );
        this.loadSource();
      }

    public loadSource(){
      this.studyAbroadService.getstudyAbroaddata().subscribe(
          res=>{
            this.content = res["content"];
            this.length = this.content.length;
            console.log(this.length );
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
      // this.router.navigate(['studyAbroad/example/list']);
    }
}
