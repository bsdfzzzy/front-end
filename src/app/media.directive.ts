import { ActivatedRoute } from '@angular/router';
import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({ selector: '[mediaView]' })
// Directive class
export class MediaviewDirective {
  scrolltop:number;
  constructor(private el: ElementRef,private renderer:Renderer,public activeRoute:ActivatedRoute) { 
    
   }
  
  @HostListener('window:resize') sizeCheck(){
    this.sizeChecking;
    this.changeWindow();
  }
  public sizeChecking = setInterval(
    ()=>{
      this.changeWindow();
    },1);

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
    if(this.scrolltop < 215 || window.screen.width < 768){
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","none");
    }else{
      this.renderer.setElementStyle(this.el.nativeElement.querySelector('#flwindow'),"display","block");
    }
  }

  private changeWindow() {
    let path = this.activeRoute.children["0"].url.value["0"].path;
        if(window.screen.width < 768){
          // console.log(this.activeRoute.children["0"].url.value["0"].path);
            /**公共适应性样式 */
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"ydtop",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"headtop",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"headimg",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"logo",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"headsearch",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"searchform",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#foot'),"foot",true);
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#headmenu'),"display","block");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#nav'),"display","none");
            /**根据路由配置适应性样式 */
            if(path == "home" ||path == "search"){
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#carousel'),"height",""+0.3*window.innerHeight+"px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#prevbtn'),"width","25px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#nextbtn'),"width","25px");
            }
            if(path == "search"){
              this.renderer.setElementClass(this.el.nativeElement.querySelector('#page'),"page",true);
              this.renderer.setElementClass(this.el.nativeElement.querySelector('#gopage'),"gopage",false);
              this.renderer.setElementClass(this.el.nativeElement.querySelector('#ydsearch'),"ydsearch",true);
            }
            if(path == "about"||path == "ranking"||path == "train"||path == "studyAbroad"||path == "studyInChina"){
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#acommonlogo'),"height",""+0.2*window.innerHeight+"px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#acommonnav'),"height","30px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#ulnav'),"line-height","30px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#acommonmain'),"margin-top","60px");
              // if(this.activeRoute.children["0"].children["0"].url.value["0"].path == "list"){
              //   this.renderer.setElementClass(this.el.nativeElement.querySelector('#page'),"page",true);
              //   this.renderer.setElementClass(this.el.nativeElement.querySelector('#gopage'),"gopage",false);
              // }
            }
        }else{
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"ydtop",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#top'),"headtop",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"headimg",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#logo'),"logo",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"headsearch",false);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#form'),"searchform",true);
            this.renderer.setElementClass(this.el.nativeElement.querySelector('#foot'),"foot",false);
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#headmenu'),"display","none");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('#nav'),"display","block");

            if(path == "home" ||path == "search"){
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#carousel'),"height","500px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#prevbtn'),"width","auto");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#nextbtn'),"width","auto");
            }
            if(path == "search"){
              this.renderer.setElementClass(this.el.nativeElement.querySelector('#page'),"page",false);
              this.renderer.setElementClass(this.el.nativeElement.querySelector('#gopage'),"gopage",true);
              this.renderer.setElementClass(this.el.nativeElement.querySelector('#ydsearch'),"ydsearch",false);
            }
            if(path == "about"||path == "ranking"||path == "train"||path == "studyAbroad"||path == "studyInChina"){
              // this.renderer.setElementStyle(this.el.nativeElement.querySelector('#acommonlogo'),"height","350px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#acommonnav'),"height","45px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#ulnav'),"line-height","45px");
              this.renderer.setElementStyle(this.el.nativeElement.querySelector('#acommonmain'),"margin-top","10px");
              // if(this.activeRoute.children["0"].children["0"].url.value["0"].path == "list"){
              //   this.renderer.setElementClass(this.el.nativeElement.querySelector('#page'),"page",false);
              //   this.renderer.setElementClass(this.el.nativeElement.querySelector('#gopage'),"gopage",true);
              // }
            }
        }
  }

}
