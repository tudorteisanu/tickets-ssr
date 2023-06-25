import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-submit-button',
    standalone: true,
    templateUrl: './submit-button.component.html',
    styleUrls: ['./submit-button.component.scss'],
    imports: [CommonModule, LoaderComponent]
})
export class SubmitButtonComponent {
    @Input() loading: boolean = false;
}
