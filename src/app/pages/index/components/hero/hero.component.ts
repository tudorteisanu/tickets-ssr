import { Component } from '@angular/core';
import { SearchTicketsComponent } from '../search-tickets/search-tickets.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [SearchTicketsComponent, NgOptimizedImage, RouterLink]
})
export class HeroComponent {

}
