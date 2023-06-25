import { Component } from '@angular/core';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';

@Component({
  selector: 'create-ticket-page',
  standalone: true,
  imports: [CreateTicketComponent],
  providers: [],
  template: `
  <app-create-ticket />
  `,
})
export default class TicketsPageComponent {

}
