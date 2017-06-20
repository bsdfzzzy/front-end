import { Component } from '@angular/core';
import { flyIn } from "../animate/fly-in";

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [flyIn]
})
export class AboutComponent {
  
}
