import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';
import { Router } from '@angular/router';
import { FORGOT_PASSWORD_ROUTE, SIGN_UP_ROUTE } from '../guest.routes';

import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { StandardInputLabelComponent } from '../../../shared/components/standard-input-label/standard-input-label.component';
import { loginAction } from '../../../stores/login/login.action';
import { AppState } from '../../../stores/app.state';
import { LoginRequest } from '../../../dtos/request/login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    StandardButtonComponent,
    ReactiveFormsModule,
    StandardInputLabelComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(event: Event): void {
    if (this.loginForm.valid) {
      var request : LoginRequest =  {
        ...this.loginForm.value
      }
      this.store.dispatch(
        loginAction({request})
      );
    } else {
     
    }
  }

  navigateToSignUpForGuardian() {
    this.router.navigate([`/${SIGN_UP_ROUTE}`]);
  }

  navigateToForgotPassword() {
    this.router.navigate([`/${FORGOT_PASSWORD_ROUTE}`]);
  }
}
