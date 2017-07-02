import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { studyAbroadService } from "../../service/studyAbroad.service";

@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[studyAbroadService]
})
export class examplelistComponent implements OnInit{
  num: number;
  content:Array<object>;
  listcontent:Array<object>;
  
  constructor(
    public studyAbroadService:studyAbroadService,
    public router:Router,
    public activeroute:ActivatedRoute
  ){}

  ngOnInit() {
    this.loadSource();
  }
  public loadSource (){
    this.studyAbroadService.getstudyAbroaddata().subscribe(
          res=>{
            this.num = res["num"];
            this.content = res["content"];
            this.totalItems = this.num;//********************** */
            this.listcontent = this.content.slice(0,10);//********************** */
            this.pagenums =Math.ceil(this.totalItems / this.itemsPerPage);//********************** */
            console.log(this.num,this.content);
          },
          error => {console.log(error)},
          () => {}
        );
  }
  public go(id){
    this.router.navigate(['studyAbroad/example/exampledetail',id]);
  }

//********************** */
  public totalItems: number;
  public currentPage: number = 1;
  public smallnumPages: number = 0;
  public itemsPerPage: number = 10;
  public maxSize:number = 4;
  public pagenums:number;
  public pagenum:string;
 
  public setPage(form): void {
    this.currentPage =parseInt(form);
    this.pagenum = '';
  }
 
  public pageChanged(event: any): void {
    this.listcontent = this.content.slice((event.page - 1)*this.itemsPerPage,event.page*this.itemsPerPage);
    // console.log('Page changed to: ' + event.page);
    // console.log('Number items per page: ' + event.itemsPerPage);
  }
}