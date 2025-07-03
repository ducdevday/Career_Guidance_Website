import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailRegistrationComponent } from './verify-email-registration/verify-email-registration.component';
export const HOME_ROUTE = '';
export const LOGIN_ROUTE = 'login';
export const FORGOT_PASSWORD_ROUTE = 'forgot-password';
export const SIGN_UP_ROUTE = 'sign-up';
export const VERIFY_EMAIL_REGISTRATION_ROUTE = 'verify-email-registration';
export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: HOME_ROUTE,
        component: HomeComponent,
      },
    ],
  },
  {
    path: LOGIN_ROUTE,
    component: LoginComponent
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignupComponent
  },
  {
    path: FORGOT_PASSWORD_ROUTE,
    component: ForgotPasswordComponent
  },
  {
    path: VERIFY_EMAIL_REGISTRATION_ROUTE,
    component: VerifyEmailRegistrationComponent
  }
] as Routes;
