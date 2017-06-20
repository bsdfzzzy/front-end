import { Component, OnInit } from '@angular/core';
import { timeout } from "rxjs/operator/timeout";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  i:number = 0 ;
  constructor(){

  }

  ngOnInit() {
    
  }

  items = [
    {source: "assets/img/lunbo3.jpg"},
    {source: "assets/img/lunbo1.jpg"},
    {source: "assets/img/lunbo2.jpg"},
    {source: "assets/img/lunbo3.jpg"},
    {source: "assets/img/lunbo1.jpg"}
  ]
  selectedItem = 1;
  prevsrc: string = "assets/img/prev.png";
  nextsrc:string = "assets/img/next.png";

  public setPosition(){
    let positionValue = 1;
    let parsedPositionValue = ""; 
    positionValue = positionValue * this.selectedItem * 100;
    parsedPositionValue = "-" + positionValue + "%";
    return parsedPositionValue;
  }

  // public setItem = (index) => {
  //   if (this.selectedItem === index) return;
  //   this.selectedItem = index;
  //   return  this.selectedItem;
  // }
  public next(){
    if (this.selectedItem === this.items.length - 1) 
    return this.selectedItem = 2;
    this.selectedItem = this.selectedItem + 1;
    return this.selectedItem;
  }

  public previous(){
    if (this.selectedItem === 0) 
    return this.selectedItem = this.items.length - 3;
    this.selectedItem = this.selectedItem - 1;
    return this.selectedItem;
  }

  public getPanesWidth() {
    let baseWidth = 100;
    let newWidth = '';
    baseWidth = baseWidth * this.items.length;
    newWidth = baseWidth + '%';
    return newWidth;
  }

  public getLiWidth() {
    let baseWidth = 100;
    let newWidth = '';
    baseWidth = baseWidth / this.items.length;
    newWidth = baseWidth + '%';
    return newWidth;
  }   

  /**
   * onMouseOver
   */
  public onMouseOverprev() {
    this.prevsrc = "assets/img/prevover.png";
  }
  /**
   * onMouseOut
   */
  public onMouseOutprev() {
    this.prevsrc = "assets/img/prev.png";
  }

    /**
   * onMouseOver
   */
  public onMouseOvernext() {
    this.nextsrc = "assets/img/nextover.png";
  }
  /**
   * onMouseOut
   */
  public onMouseOutnext() {
    this.nextsrc = "assets/img/next.png";
  }


  // public autoChange = setInterval(
  //   ()=>{ 
  //     this.next();
  //   }, 2000);

  // /**
  //  * onMouseOverslide
  //  */
  // public onMouseOverslide() {
  //   clearInterval(this.autoChange);
  // }
  // /**
  //  * onMouseOutslide
  //  */
  // public onMouseOutslide() {
  //   this.autoChange = setInterval(
  //   ()=>{ 
  //     this.next();
  //   }, 2000);
  // }
}
