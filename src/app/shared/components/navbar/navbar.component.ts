import { Component, Signal, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LinkInterface } from '../../types/link.interface';
import { PageRoutes } from '../../types/page-routes.enum';
import { AuthButtonsComponent } from '../auth-buttons/auth-buttons.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrentUserInterface } from '../../types/current-user.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, AuthButtonsComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly isLoggedIn: Signal<boolean | null> = signal(false);
  readonly currentUser: Signal<CurrentUserInterface | null> = signal(null);
  homeUrl: PageRoutes = PageRoutes.Home;

  links: LinkInterface[] = [
    {
      url: PageRoutes.Home,
      text: 'Home'
    },
    {
      url: PageRoutes.About,
      text: 'About'
    },
    {
      url: PageRoutes.Contact,
      text: 'Contact'
    },
    {
      url: PageRoutes.Faq,
      text: 'FAQ'
    },
  ];

  public logout(): void {
    console.log('logout');

  }

  public trackByIndex(index: number): number {
    return index;
  }
}
