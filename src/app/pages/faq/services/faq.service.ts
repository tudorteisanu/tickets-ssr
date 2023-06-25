import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { FaqInterface } from '../types/faq.interface';
import { ApiRoutes } from '@/shared/types/api-routes.enum';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(private http: HttpClient) { }

  public fetchFaq(): Observable<FaqInterface[]> {
    return this.http.get<FaqInterface[]>(ApiRoutes.Faq);
  }
}
