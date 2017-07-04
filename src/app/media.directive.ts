import { ActivatedRoute } from '@angular/router';
import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({ selector: '[mediaView]' })
// Directive class
export class MediaviewDirective {
  scrolltop:number;
  constructor(private el: ElementRef,private renderer:Renderer,public activeRoute:ActivatedRoute) { 
    
   }
  @HostListener('window:scroll') scrollCheck(){
    this.scrollChecking;
    this.changeScroll();
  }
    public scrollChecking = setInterval(
    ()=>{
      this.changeScroll();
    },1);

  private changeScroll(){
    this.scrolltop = document.body.scrollTop;
    if(this.scrolltop < 215){
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","none");
    }else{
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","block");
    }
  }
}
