import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTicketInputInterface } from '../types/create-ticket-input.interface';
import { Observable } from 'rxjs';
import { ApiRoutes } from '@/shared/types/api-routes.enum';

@Injectable({
  providedIn: 'root'
})
export class CreateTicketService {
  constructor(private http: HttpClient) { }

  createTicket(createTicketInput: CreateTicketInputInterface): Observable<CreateTicketInputInterface> {
    return this.http.post<CreateTicketInputInterface>(ApiRoutes.Tickets, createTicketInput)
  }
}
