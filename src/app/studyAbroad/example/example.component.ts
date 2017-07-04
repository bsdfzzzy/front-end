import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'example-root',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class exampleComponent implements OnInit{
  public typeid:number = 1;      /**将该栏目的文档所属typeid输出，并在html中传入list */
  
  constructor(
    public router:Router
  ){}

  ngOnInit() {
    // this.router.navigate(['studyAbroad/list',this.typeid]);
  }
    // @Output() 
    // public follow = new EventEmitter<string>();

    // public followBtnClick(){
    //     this.follow.emit("follow");
    // }
}
