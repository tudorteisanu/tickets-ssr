import { ApiRoutes } from '@/shared/types/api-routes.enum';
import { TicketInterface } from '@/shared/types/ticket.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, delay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient) { }

  public fetchTickets(): Observable<TicketInterface[]> {
    return this.http.get<TicketInterface[]>(ApiRoutes.Tickets);
  }
}
