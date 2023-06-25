import { Component, OnInit, Signal } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { FaqInterface } from '../../types/faq.interface';
import { NgForOf, NgIf } from '@angular/common';
import { provideComponentStore } from '@ngrx/component-store';
import { FaqStore } from '../../store/faq.store';
import { BackendErrorInterface } from '@/shared/types/backend-error.interface';
import { ErrorMessageComponent } from "../../../../shared/components/error-message/error-message.component";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  providers: [provideComponentStore(FaqStore)],
  imports: [AccordionItemComponent, NgIf, NgForOf, ErrorMessageComponent]
})
export class FaqComponent implements OnInit {
  faqs: Signal<FaqInterface[]> = this.faqStore.dataSelector;
  isLoading: Signal<boolean> = this.faqStore.isLoadingSelector;
  error: Signal<BackendErrorInterface | null> = this.faqStore.errorSelector;

  constructor(private faqStore: FaqStore) { }

  ngOnInit(): void {
    this.faqStore.fetchFAQs();
  }

  public trackByIndex(index: number): number {
    return index;
  }
}
