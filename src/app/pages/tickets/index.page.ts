import { Component, OnInit } from '@angular/core';
import { TicketsStore } from './store/tickets.store';
import { provideComponentStore } from '@ngrx/component-store';
import { TicketsComponent } from './components/tickets/tickets.component';

@Component({
  selector: 'app-tickets-page',
  standalone: true,
  imports: [TicketsComponent],
  providers: [provideComponentStore(TicketsStore)],
  template: `
  <app-tickets />
  `,
})
export default class TicketsPageComponent implements OnInit {
  constructor(private readonly ticketsStore: TicketsStore) { }

  ngOnInit(): void {
    this.ticketsStore.fetchTickets();
  }
}
