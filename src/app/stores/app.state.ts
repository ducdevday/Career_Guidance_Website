import { ForgotPasswordState } from './forgotPassword/forgot-password.reducer';
import { GetUserInfoState } from './getUserInfo/getUserInfo.reducer';
import { LoginState } from './login/login.reducer';
import { SignUpState } from './signup/signup.reducer';
import { VerifyEmailRegistrationState } from './verify-email-registration/verify-email-registration.reducer';

export interface AppState {
  login: LoginState;
  signup: SignUpState;
  forgotPassword: ForgotPasswordState;
  verifyEmailRegistration: VerifyEmailRegistrationState;
  getUserInfo: GetUserInfoState
}
