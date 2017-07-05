import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { rankingService } from "../service/ranking.service";
@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[
    rankingService
  ]
})
export class listComponent implements OnInit{
  num: number;
  data:Array<object>;
  listdata:Array<object>;
  @Input()
  typeid:number;
  constructor(
    public rankingService:rankingService,
    public router:Router,
    public activeroute:ActivatedRoute
  ){}

  ngOnInit() {
    this.loadSource();
  }

  public loadSource (){
    this.rankingService.getrankingdata(this.typeid).subscribe(
          res=>{
            this.num = res["num"];
            this.data = res["data"];
            this.totalItems = this.num;//********************** */
            this.listdata = this.data.slice(0,10);//********************** */
            this.pagenums =Math.ceil(this.totalItems / this.itemsPerPage);//********************** */
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
    this.listdata = this.data.slice((event.page - 1)*this.itemsPerPage,event.page*this.itemsPerPage);
    // console.log('Page changed to: ' + event.page);
    // console.log('Number items per page: ' + event.itemsPerPage);
  }
}