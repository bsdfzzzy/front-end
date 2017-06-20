import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,animate,style,transition,trigger,state,HostListener } from '@angular/core';
import { HomeService } from "./service/home.service";
import { flyIn } from "../animate/fly-in";

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService],
  animations: [flyIn]
})
export class HomeComponent implements OnInit{
  num: number;
  content:Array<object>;
  searchResults: string;
  
  constructor(
    public activeRoute:ActivatedRoute,
    public homeService:HomeService
  ){}

  ngOnInit() {
    this.loadSource();
  }
  public loadSource (){
    this.homeService.gethomedata().subscribe(
          res=>{
            this.num = res[0].num;
            this.content = res[0].content;
            console.log(this.num,this.content);
          },
          error => {console.log(error)},
          () => {}
        );
  }
}
