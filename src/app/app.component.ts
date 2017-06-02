import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public selectkey:string = '';

  constructor(){}

  ngOnInit(){

  }
  public doSelect(form:NgForm){
    this.selectkey = form.value.selectkey;
    console.log(this.selectkey);
  }
}
