import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public swords:string;
  public selectwords: string = '';
  
  constructor(
    public router:Router
  ){
    
  }
  ngOnInit(){

  }
  
  public doSelect(form:NgForm){
    this.selectwords = form.value.swords;
    console.log(this.selectwords);
    if (this.selectwords == '') {
      alert("请输入搜索内容");
    }
    else{
        this.router.navigate(['search',this.selectwords]);
    }
  }
}
