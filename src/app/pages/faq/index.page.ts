import { Component } from '@angular/core';
import { FaqComponent } from './components/faq/faq.component';

@Component({
  selector: 'faq-page',
  standalone: true,
  imports: [FaqComponent],
  providers: [],
  template: `
  <app-faq />
  `,
})
export default class TicketsPageComponent {

}
