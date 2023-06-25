import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap, tap } from "rxjs";
import { TicketsService } from "../services/tickets.service";
import { BackendErrorInterface } from "@/shared/types/backend-error.interface";
import { TicketInterface } from "@/shared/types/ticket.interface";

type TicketStoreStateType = {
  isLoading: boolean;
  error: BackendErrorInterface | null;
  data: TicketInterface[]
}

const initialState: TicketStoreStateType = {
  isLoading: false,
  error: null,
  data: []
};

@Injectable()
export class TicketsStore extends ComponentStore<TicketStoreStateType> {
  public readonly dataSelector = this.selectSignal(state => state.data);
  public readonly isLoadingSelector = this.selectSignal(state => state.isLoading);
  public readonly errorSelector = this.selectSignal(state => state.error);

  constructor(private readonly ticketsService: TicketsService) {
    super(initialState);
  }

  readonly fetchTickets = this.effect((tickets$: Observable<void>) => {
    return tickets$.pipe(
      tap(() => {
        this.patchState({ isLoading: true })
      }),
      switchMap(() =>
        this.ticketsService
          .fetchTickets()
          .pipe(
            tapResponse(
              (data) => this.patchState({ data, isLoading: false }),
              (error: BackendErrorInterface) => this.patchState({ error, isLoading: false }))
          )
      )
    );
  });
}

