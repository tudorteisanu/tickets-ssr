import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-navbar />
  <main>
    <div class="page-content">
      <router-outlet />
    </div>
  </main>
  <app-footer />
`,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `,
  ],
  imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent { }
