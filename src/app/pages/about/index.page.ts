import { Component } from '@angular/core';
import {AboutComponent} from "@/pages/about/components/about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  template: `
   <app-about/>
  `,
})
export default class AboutPageComponent {
}
