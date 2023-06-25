import { CreateTicketInputInterface } from '@/pages/create-ticket/types/create-ticket-input.interface';
import { FormInputComponent } from '@/shared/components/form-input/form-input.component';
import { FormTextareaComponent } from '@/shared/components/form-textarea/form-textarea.component';
import { LoaderComponent } from '@/shared/components/loader/loader.component';
import { NgIf } from '@angular/common';
import { Component, OnInit, Signal, signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTicketStore } from '../../store/create-ticket.store';
import { provideComponentStore } from '@ngrx/component-store';
import { SubmitButtonComponent } from "../../../../shared/components/submit-button/submit-button.component";
import { toFormType } from '@/shared/types/to-form.type';
import { BackendErrorInterface } from '@/shared/types/backend-error.interface';
import { ErrorMessageComponent } from "../../../../shared/components/error-message/error-message.component";

@Component({
    selector: 'app-create-ticket',
    templateUrl: './create-ticket.component.html',
    styleUrls: ['./create-ticket.component.scss'],
    standalone: true,
    providers: [provideComponentStore(CreateTicketStore)],
    imports: [NgIf, ReactiveFormsModule, FormInputComponent, FormTextareaComponent, LoaderComponent, SubmitButtonComponent, ErrorMessageComponent]
})
export class CreateTicketComponent implements OnInit {
  createTicketForm!: FormGroup<toFormType<CreateTicketInputInterface>>;
  isSubmitting: Signal<boolean> = this.createTicketStore.isSubmittingSelector;
  error: Signal<BackendErrorInterface | null> = this.createTicketStore.errorSelector;

  constructor(
    private createTicketStore: CreateTicketStore,
    private fb: NonNullableFormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public submit(): void {
    this.createTicketForm.markAllAsTouched();

    if (this.createTicketForm.valid) {
      this.createTicketStore.createTicket(this.createTicketForm.getRawValue());
    }
  }

  private createForm(): void {
    this.createTicketForm = this.fb.group({
      startTime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      endTime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      type: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      description: ['', [Validators.minLength(10), Validators.maxLength(256)]],
      date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]]
    });
  }
}
