import { Component } from '@angular/core';
import {AboutComponent} from "./components/about/about.component";

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [AboutComponent],
  template: `
   <app-about/>
  `,
})
export default class AboutPageComponent {
}
