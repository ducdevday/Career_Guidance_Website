import { createReducer, on } from '@ngrx/store';
import {
  confirmSetNewPasswordAction,
  confirmSetNewPasswordFailAction,
  requestSetNewPasswordAction,
  requestSetNewPasswordFailAction,
  requestSetNewPasswordSuccessAction,
} from './forgot-password.action';

export interface ForgotPasswordState {
  step: number;
  error: string | null;
}

export const initialState: ForgotPasswordState = {
  step: 0,
  error: null,
};

export const forgotPasswordReducer = createReducer(
  initialState,
  on(requestSetNewPasswordAction, (state) => ({
    ...state,
    error: null,
  })),
  on(requestSetNewPasswordSuccessAction, (state) => ({
    ...state,
    step: 1,
  })),
  on(requestSetNewPasswordFailAction, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(confirmSetNewPasswordAction, (state) => ({
    ...state,
    error: null,
  })),
  on(confirmSetNewPasswordAction, (state) => ({
    ...state,
    step: 0,
  })),
  on(confirmSetNewPasswordFailAction, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
