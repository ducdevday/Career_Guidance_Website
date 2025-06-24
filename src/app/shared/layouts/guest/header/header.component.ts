import { Component } from '@angular/core';
import { StandardButtonComponent } from '../../../components/standard-button/standard-button.component';
import { Router } from '@angular/router';
import {
  LOGIN_ROUTE,
  SIGN_UP_ROUTE,
} from '../../../../modules/guest/guest.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StandardButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToLogIn() {
    this.router.navigate([`/${LOGIN_ROUTE}`]);
  }

  navigateToSignUpForGuardian() {
    this.router.navigate([`/${SIGN_UP_ROUTE}`]);
  }
}
