import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from "./service/search.service";

@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit{
  selectwords: string;
  num: number;
  content:Array<object>;
  viewcontent:Array<object>;
  pagenum:string;


  constructor(
    public activeRoute:ActivatedRoute,
    public searchService:SearchService
  ){
    
  } 
  ngOnInit (){
    this.activeRoute.params.subscribe(
      params => { 
        this.selectwords = params.selectwords;
      }
    );
    this.loadSource();
  }
  
  public totalItems: number;
  public currentPage: number = 1;
  public smallnumPages: number = 0;
  public itemsPerPage: number = 10;
  public maxSize:number = 4;
  public pagenums:number;
 
  public setPage(form): void {
    this.currentPage =parseInt(form);
    this.pagenum = '';
  }
 
  public pageChanged(event: any): void {
    this.viewcontent = this.content.slice((event.page - 1)*this.itemsPerPage,event.page*this.itemsPerPage);
    // console.log('Page changed to: ' + event.page);
    // console.log('Number items per page: ' + event.itemsPerPage);
  }

  public loadSource() {
    this.searchService.getSearchResults(this.selectwords).subscribe(
          res=>{
            this.num = res["num"];
            this.totalItems = res["num"];
            this.content = res["content"];
            this.viewcontent = this.content.slice(0,10);
            this.pagenums =Math.ceil(this.totalItems / this.itemsPerPage);
            console.log(this.num,this.content);
          },
          error => {console.log(error)},
          () => {}
        );
  }
  
}
