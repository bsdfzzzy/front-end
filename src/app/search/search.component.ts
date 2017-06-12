import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { SearchResults } from "./model/searchResults";
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
  searchResults: string;
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

  public loadSource() {
    this.searchService.getSearchResults(this.selectwords).subscribe(
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
