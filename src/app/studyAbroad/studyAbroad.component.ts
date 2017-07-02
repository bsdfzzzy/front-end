import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { studyAbroadService } from "./service/studyAbroad.service";

@Component({
  selector: 'studyAbroad-root',
  templateUrl: './studyAbroad.component.html',
  styleUrls: ['./studyAbroad.component.css'],
  providers:[studyAbroadService]
})
export class studyAbroadComponent implements OnInit{
  // num: number;
  // content:Array<object>;
  // studyAbroadcontent:Array<object>;
  // contentid:number = -1;
  
  // constructor(
  //   public activeRoute:ActivatedRoute,
  //   public studyAbroadService:studyAbroadService,
  //   public router:Router
  // ){}

  ngOnInit() {
    // this.loadSource();
  }
  // public loadSource (){
  //   this.studyAbroadService.getstudyAbroaddata().subscribe(
  //         res=>{
  //           this.num = res["num"];
  //           this.content = res["content"];
  //           this.studyAbroadcontent = this.content.slice(0,3);
  //           console.log(this.num,this.studyAbroadcontent);
  //         },
  //         error => {console.log(error)},
  //         () => {}
  //       );
  // }
  // public go(id){
  //   this.contentid = id;
  //   console.log(this.contentid);
  // }
  // public goback(){
  //   // this.router.navigate(['studyAbroad']);
  //   this.contentid = -1;
  // }


}