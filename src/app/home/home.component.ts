import { typePipe } from './../utils/pipe/type-pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeService } from "./service/home.service";
import { flyIn } from "../animate/fly-in";

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
    HomeService,
    typePipe
    ],
  animations: [flyIn]
})
export class HomeComponent implements OnInit{
  num: number;
  data:Array<object>;
  newsdata: Array<object>;
  typeid:number;
  
  constructor(
    public activeRoute:ActivatedRoute,
    public homeService:HomeService,
    public router:Router,
    public typepipe:typePipe
  ){}

  ngOnInit() {
    this.loadSource();
  }
  public loadSource (){
    this.homeService.gethomedata().subscribe(
          res=>{
            this.num = res["num"];
            this.data = res["data"];
            this.newsdata = this.data.slice(0,5);
          },
          error => {console.log(error)},
          () => {}
        );
  }
  public godetail(docid,typeid){
    this.typeid = parseInt(typeid);
    this.router.navigate([this.typepipe.transform(this.typeid), {docid,typeid}]);
  }
}
