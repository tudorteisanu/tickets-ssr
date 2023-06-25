import { Component, Input, Optional, Self, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ControlValueAccessor, NgControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

type ErrorMessage = Record<string, string>;

const DEFAULT_ERROR_MESSAGES: ErrorMessage = {
  required: 'This is required field',
  email: 'Invalid email format',
  minlength: 'Minimal length is {requiredLength} ({actualLength})',
  maxlength: 'Minimal length is {requiredLength} ({actualLength})'

};

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
  encapsulation: ViewEncapsulation.None
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() icon = '';
  @Input() value = '';
  @Input() label = '';
  @Input() inputType = 'text';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() customErrorMessages: Record<string, string> = {};
  @Input() hideDetails = false;

  constructor(@Self() @Optional() private control?: NgControl) {
    if (!this.control) {
      return;
    }

    this.control.valueAccessor = this;
  }

  public get areMessageShown(): boolean {
    return !!this.control && (this.control.touched || !!this.control.dirty);
  }

  public get iconUrl(): string {
    return `/icons/${this.icon}.svg`;
  }

  public get errorMessage(): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!this.control || !this.errors || this.hideDetails) {
      return '';
    }

    return Object.entries(this.errors)
      .map(([value, options]) => {
        if (options && typeof options === 'object') {
          return this.getError(value).replace(/{([^{}]*)}/g, (_, key) => {
            return this.getPropertyByString(options, key) || '';
          });
        }

        return this.getError(value);
      })
      .join(', ');
  }

  private get errors(): ValidationErrors | null {
    if (!this.control) {
      return null;
    }

    return this.control.errors;
  }

  private get errorMessages(): ErrorMessage {
    return {
      ...DEFAULT_ERROR_MESSAGES,
      ...this.customErrorMessages
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  public onChange = (value: unknown): void => { };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouched = (): void => { };

  public writeValue(value: unknown): void {
    this.onChange(value);
  }

  public registerOnChange(fn: (rating: unknown) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private getError(key: string): string {
    return this.errorMessages[key] || '';
  }

  private getPropertyByString(object: object, property: string, sep = '.'): string {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let translation: any = object;

      property.split(sep).map((key) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        translation = translation[key];
      });

      return translation;
    } catch (e) {
      return property;
    }
  }
}
