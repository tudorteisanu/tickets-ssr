import { Component } from '@angular/core';
import { PageRoutes } from '../../types/page-routes.enum';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.scss'],
  standalone: true,
  providers: [RouterLink],
  imports: [CommonModule, RouterLink]
})
export class AuthButtonsComponent {
  public get singUpUrl(): PageRoutes {
    return PageRoutes.SignUp;
  }

  public get logIn(): PageRoutes {
    return PageRoutes.LogIn;
  }
}
