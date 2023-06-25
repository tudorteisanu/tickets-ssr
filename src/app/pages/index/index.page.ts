import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>
  `,
})
export default class HomeComponent {
  count = 0;
  private router: Router = inject(Router);

  constructor() { }

  increment() {
    this.router.navigate(['/about'])
  }
}
