import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap } from "rxjs";
import { CreateTicketService } from "../services/create-ticket.service";
import { BackendErrorInterface } from "@/shared/types/backend-error.interface";
import { CreateTicketInputInterface } from "../types/create-ticket-input.interface";

type CreateTicketStateStoreType = {
    isSubmitting: boolean,
    error: BackendErrorInterface | null
}

const initialState: CreateTicketStateStoreType = {
    isSubmitting: false,
    error: null,
};

@Injectable()
export class CreateTicketStore extends ComponentStore<CreateTicketStateStoreType> {
    public readonly isSubmittingSelector = this.selectSignal(state => state.isSubmitting);
    public readonly errorSelector = this.selectSignal(state => state.error);

    constructor(private readonly createTicketService: CreateTicketService) {
        super(initialState);
    }

    readonly createTicket = this.effect((tickets$: Observable<CreateTicketInputInterface>) => {
        return tickets$?.pipe(
            switchMap((payload) =>
                this.createTicketService
                    .createTicket(payload)
                    .pipe(
                        tapResponse(
                            () => this.patchState({ isSubmitting: false }),
                            (error: BackendErrorInterface) => this.patchState({ error, isSubmitting: false }))
                    )
            )
        );
    });
}

