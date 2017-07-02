import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { flyIn } from "../animate/fly-in";
import { AboutService } from "./service/about.service";

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[AboutService]
})
export class AboutComponent implements OnInit{
  num: number;
  content:Array<object>;
  aboutcontent:Array<object>;
  
  constructor(
    public activeRoute:ActivatedRoute,
    public aboutService:AboutService
  ){}

  ngOnInit() {
    this.loadSource();
  }
  public loadSource (){
    this.aboutService.getaboutdata().subscribe(
          res=>{
            this.num = res["num"];
            this.content = res["content"];
            this.aboutcontent = this.content.slice(0,1);
            console.log(this.num,this.aboutcontent);
          },
          error => {console.log(error)},
          () => {}
        );
  }


}
