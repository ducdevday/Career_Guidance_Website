import { createReducer, on } from '@ngrx/store';
import { loginAction, loginFailAction, loginSuccessAction } from './login.action';
import { LoginResponse } from '../../dtos/response/login-response';

export interface LoginState {
  cre: LoginResponse | null;
  error: string | null;
}

export const initialState: LoginState = {
  cre: null,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(loginAction, state => ({ ...state, cre: null, error: null })),
  on(loginSuccessAction, (state, action) => ({ ...state, cre: action.cre })),
  on(loginFailAction, (state, action) => ({ ...state, error: action.error }))
);