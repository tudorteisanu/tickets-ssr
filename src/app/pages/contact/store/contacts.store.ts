import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap, tap } from "rxjs";
import { ContactService } from "../services/contact.service";
import { BackendErrorInterface } from "@/shared/types/backend-error.interface";
import { ContactInputInterface } from "../types/contact-input.interface";

type ContactStateStoreType = {
    isSubmitting: boolean,
    error: BackendErrorInterface | null
}

const initialState: ContactStateStoreType = {
    isSubmitting: false,
    error: null,
};

@Injectable()
export class ContactsStore extends ComponentStore<ContactStateStoreType> {
    public readonly isSubmittingSelector = this.selectSignal(state => state.isSubmitting);
    public readonly errorSelector = this.selectSignal(state => state.error);

    constructor(private readonly contactService: ContactService) {
        super(initialState);
    }

    readonly submitForm = this.effect((tickets$: Observable<ContactInputInterface>) => {
        return tickets$?.pipe(
            tap(() => {
                this.patchState({ isSubmitting: true })
            }),
            switchMap((payload) =>
                this.contactService
                    .contactUs(payload)
                    .pipe(
                        tapResponse(
                            () => this.patchState({ isSubmitting: false }),
                            (error: BackendErrorInterface) => this.patchState({ error, isSubmitting: false }))
                    )
            )
        );
    });
}

