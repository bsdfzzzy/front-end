import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { studyAbroadService } from "../service/studyAbroad.service";
import { getTypeIdService } from "../service/getTypeId.service";
@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[
    studyAbroadService,
    getTypeIdService
  ]
})
export class listComponent implements OnInit{
  num: number;
  content:Array<object>;
  listcontent:Array<object>;
  @Input()
  typeid:number;
  constructor(
    public studyAbroadService:studyAbroadService,
    public router:Router,
    public activeroute:ActivatedRoute,
    public getTypeIdService:getTypeIdService
  ){}

  ngOnInit() {
    this.loadSource();
    // this.getTypeIdService.getTypeId(this.typeid);
  }

  public loadSource (){
    this.studyAbroadService.getstudyAbroaddata(this.typeid).subscribe(
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
  public go(docid){
    this.router.navigate(['studyAbroad/detail', { typeid: this.typeid,docid }]);
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