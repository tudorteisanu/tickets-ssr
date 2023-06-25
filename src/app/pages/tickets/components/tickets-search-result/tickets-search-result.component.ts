
import { TicketInterface } from '../../../../shared/types/ticket.interface';
import { Component, Signal, inject } from '@angular/core';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { NgForOf, NgIf } from '@angular/common';
import { TicketsStore } from '../../store/tickets.store';

@Component({
  selector: 'app-tickets-search-result',
  templateUrl: './tickets-search-result.component.html',
  styleUrls: ['./tickets-search-result.component.scss'],
  standalone: true,
  imports: [TicketCardComponent, NgIf, NgForOf]
})
export class TicketsSearchResultComponent {
  private readonly ticketsStore: TicketsStore = inject(TicketsStore);
  readonly tickets: Signal<TicketInterface[]> = this.ticketsStore.selectSignal(state => state.data);
  readonly isLoading: Signal<boolean> = this.ticketsStore.selectSignal(state => state.isLoading);

  public trackBy(index: number): number {
    return index;
  }
}
