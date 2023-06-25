import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap, tap } from "rxjs";
import { FaqService } from "../services/faq.service";
import { BackendErrorInterface } from "@/shared/types/backend-error.interface";
import { FaqInterface } from "../types/faq.interface";

type FAQStoreStateType = {
  isLoading: boolean;
  error: BackendErrorInterface | null;
  data: FaqInterface[];
}

const faqInitialState: FAQStoreStateType = {
  isLoading: false,
  error: null,
  data: []
};

@Injectable()
export class FaqStore extends ComponentStore<FAQStoreStateType> {
  public readonly dataSelector = this.selectSignal(state => state.data);
  public readonly isLoadingSelector = this.selectSignal(state => state.isLoading);
  public readonly errorSelector = this.selectSignal(state => state.error);

  constructor(private readonly faqService: FaqService) {
    super(faqInitialState);
  }

  readonly fetchFAQs = this.effect((tickets$: Observable<void>) => {
    return tickets$?.pipe(
      tap(() => {
        this.patchState({ isLoading: true })
      }),
      switchMap(() =>
        this.faqService
          .fetchFaq()
          .pipe(
            tapResponse(
              (data) => this.patchState({ data, isLoading: false }),
              (error: BackendErrorInterface) => this.patchState({ error, isLoading: false }))
          )
      )
    );
  });
}

