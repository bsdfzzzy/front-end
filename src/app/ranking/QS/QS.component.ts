import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'QS-root',
  templateUrl: './QS.component.html',
  styleUrls: ['./QS.component.css']
})
export class QSComponent implements OnInit{
  public typeid:number = 3; 
  
  constructor(
  ){}

  ngOnInit() {

  }

}
