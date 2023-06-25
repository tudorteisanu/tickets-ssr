import { Component } from '@angular/core';
import { FormInputComponent } from "../../../../shared/components/form-input/form-input.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-search-tickets',
    templateUrl: './search-tickets.component.html',
    styleUrls: ['./search-tickets.component.scss'],
    standalone: true,
    imports: [FormInputComponent, NgOptimizedImage]
})
export class SearchTicketsComponent {

}
