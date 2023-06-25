import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { TicketStateInterface } from "../types/ticket-state.interface";
import { ticketsInitialState } from "./tickets.state";
import { EMPTY, Observable, catchError, switchMap, tap } from "rxjs";
import { TicketsService } from "../services/tickets.service";

@Injectable()
export class TicketsStore extends ComponentStore<TicketStateInterface> {
    public readonly tickets = this.selectSignal(state => state.data);
    public readonly isLoading = this.selectSignal(state => state.isLoading);

    constructor(private readonly ticketsService: TicketsService) {
        super(ticketsInitialState);
    }

    readonly fetchTickets = this.effect((tickets$: Observable<void>) => {
        return tickets$?.pipe(
            switchMap(() => this.ticketsService.fetchTickets().pipe(
                tap({
                    next: (data) => {
                        this.patchState((state) => ({
                            ...state,
                            data,
                        }))
                    },
                    error: (e) => console.log(e),
                }),
                catchError(() => EMPTY),
            )),
        );
    });
}

