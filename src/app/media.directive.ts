import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({ selector: '[mediaView]' })
// Directive class
export class MediaviewDirective {
  scrolltop:number;
  constructor(private el: ElementRef,private renderer:Renderer) {  }
  
  @HostListener('window:resize') sizeCheck(){
    this.checking;
    this.changeWindow();
  }
  public checking = setTimeout(
    ()=>{
      this.changeWindow();
    },1);

  @HostListener('window:scroll') scrollCheck(){
    this.changeScroll();
  }

  private changeScroll(){
    this.scrolltop = document.body.scrollTop;
    if(this.scrolltop < 215){
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","none");
    }else{
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","block");
    }
  }

  private changeWindow() {
        if(window.screen.width < 768){
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"ydtop",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"headtop",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"headimg",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"logo",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"headsearch",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"searchform",false);
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#headmenu'),"display","block");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#nav'),"display","none");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#carousel'),"height","200px");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","none");
        }else{
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"ydtop",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"headtop",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"headimg",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"logo",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"headsearch",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"searchform",true);
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#headmenu'),"display","none");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#nav'),"display","block");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#carousel'),"height","500px");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","block");
        }
  }

}
