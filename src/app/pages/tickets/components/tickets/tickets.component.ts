import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsHeadingComponent } from '../tickets-heading/tickets-heading.component';
import { TicketsSearchResultComponent } from '../tickets-search-result/tickets-search-result.component';
import { TicketsSearchComponent } from '../tickets-search/tickets-search.component';
import { ErrorMessageComponent } from "../../../../shared/components/error-message/error-message.component";
import { BackendErrorInterface } from '@/shared/types/backend-error.interface';
import { TicketsStore } from '../../store/tickets.store';

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.css'],
    imports: [CommonModule, TicketsHeadingComponent, TicketsSearchComponent, TicketsSearchResultComponent, ErrorMessageComponent]
})
export class TicketsComponent {
    error: Signal<BackendErrorInterface | null> = this.ticketsStore.errorSelector;

    constructor(private ticketsStore: TicketsStore) { }
}
