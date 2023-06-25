import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent],
  template: `
   <section class="home-page">
  <app-hero />
</section>
  `,
  styles: [`
  .home-page {
    height: 100%;
    width: 100%;
    max-width: $screen-xl;
    margin: 0 auto;
    box-sizing: border-box;
}`]
})
export default class HomeComponent {

}
