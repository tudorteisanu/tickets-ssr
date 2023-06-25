import { Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [ContactComponent],
  providers: [],
  template: `
  <app-contact />
  `,
})
export default class ContactPageComponent {

}
