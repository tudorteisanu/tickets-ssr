import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInputInterface } from '../types/contact-input.interface';
import { Observable, delay } from 'rxjs';
import { ApiRoutes } from '@/shared/types/api-routes.enum';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  public contactUs(paload: ContactInputInterface): Observable<object> {
    return this.http.post(ApiRoutes.Contact, paload);
  }
}
