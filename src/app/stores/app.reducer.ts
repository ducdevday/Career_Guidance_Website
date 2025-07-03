import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { loginReducer } from './login/login.reducer';
import { signUpReducer } from './signup/signup.reducer';
import { forgotPasswordReducer } from './forgotPassword/forgot-password.reducer';
import { verifyEmailRegistrationReducer } from './verify-email-registration/verify-email-registration.reducer';
import { userReducer } from './getUserInfo/getUserInfo.reducer';

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
  signup: signUpReducer,
  forgotPassword: forgotPasswordReducer,
  verifyEmailRegistration: verifyEmailRegistrationReducer,
  getUserInfo: userReducer
};
