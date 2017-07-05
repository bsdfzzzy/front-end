import { Component, OnInit } from '@angular/core';
import { AmapComponent } from './amap/amap.component';

@Component({
  selector: 'app-gaode-map',
  templateUrl: './gaode-map.component.html',
  styleUrls: ['./gaode-map.component.scss']
})
export class GaodeMapComponent implements OnInit {
  items:Array<object> = [
    {
      latitude : 30.697218,
      longitude : 104.073694,
      container : "container1",
      belong : "总部",
      QQ : "1231564546",
      phonenum : "121654654651",
      address : "成都北站",
      weibo : "http://blog.sina.com.cn/jasonyeh"
    },
    {
      latitude : 30.675474,
      longitude : 104.100344,
      container : "container2",
      belong : "成都分部",
      QQ : "1231564546",
      phonenum : "121654654651",
      address : "成都东站",
      weibo : ""
    }
  ]
    
  constructor() { }
  ngOnInit() {
  }
}