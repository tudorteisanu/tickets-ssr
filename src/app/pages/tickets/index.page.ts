import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsHeadingComponent } from './components/tickets-heading/tickets-heading.component';
import { TicketsSearchComponent } from './components/tickets-search/tickets-search.component';
import { TicketsSearchResultComponent } from './components/tickets-search-result/tickets-search-result.component';
import { TicketsStore } from './store/tickets.store';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TicketsHeadingComponent, TicketsSearchComponent, TicketsSearchResultComponent],
  providers: [provideComponentStore(TicketsStore)],
  template: `
   <section>
  <app-tickets-heading />
  <app-tickets-search />
  <app-tickets-search-result />
</section>
  `,
})
export default class HomeComponent {
  private readonly ticketsStore: TicketsStore = inject(TicketsStore);

  ngOnInit(): void {
    this.ticketsStore.fetchTickets();
  }
}
