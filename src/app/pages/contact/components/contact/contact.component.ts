
import { BackendErrorInterface } from '@/shared/types/backend-error.interface';
import { Component, OnInit, Signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsStore } from '../../store/contacts.store';
import { provideComponentStore } from '@ngrx/component-store';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { FormInputComponent } from '@/shared/components/form-input/form-input.component';
import { FormTextareaComponent } from '@/shared/components/form-textarea/form-textarea.component';
import { LoaderComponent } from '@/shared/components/loader/loader.component';
import { toFormType } from '@/shared/types/to-form.type';
import { ContactInputInterface } from '../../types/contact-input.interface';
import { SubmitButtonComponent } from "@/shared/components/submit-button/submit-button.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  providers: [provideComponentStore(ContactsStore)],
  imports: [ReactiveFormsModule, NgIf, NgOptimizedImage, FormInputComponent, FormTextareaComponent, LoaderComponent, SubmitButtonComponent]
})
export class ContactComponent implements OnInit {
  contactsForm!: FormGroup<toFormType<ContactInputInterface>>;
  isSubmitting: Signal<boolean> = this.contactsStore.isSubmittingSelector;
  errorMessage: Signal<BackendErrorInterface | null> = this.contactsStore.errorSelector;

  constructor(private fb: NonNullableFormBuilder, private contactsStore: ContactsStore) { }

  ngOnInit(): void {
    this.createForm();
  }

  public submit(): void {
    this.contactsForm.markAllAsTouched();

    if (this.contactsForm.valid) {
      this.contactsStore.submitForm(this.contactsForm.getRawValue());
    }
  }

  private createForm(): void {
    this.contactsForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.minLength(10), Validators.maxLength(256)]]
    });
  }
}
