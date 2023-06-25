import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TicketInterface } from 'src/app/shared/types/ticket.interface';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent {
  @Input() ticket!: TicketInterface;
}
