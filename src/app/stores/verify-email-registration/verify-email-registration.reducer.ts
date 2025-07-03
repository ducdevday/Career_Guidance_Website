import { createReducer, on } from '@ngrx/store';
import {
  verifyEmailRegistrationAction,
  verifyEmailRegistrationFailAction,
  verifyEmailRegistrationSuccessAction,
} from './verify-email-registration.action';

export interface VerifyEmailRegistrationState {
  isSuccess: boolean;
  isLoading: boolean;
  error: string | null;
}

export const initialState: VerifyEmailRegistrationState = {
  isSuccess: false,
  isLoading: false,
  error: null,
};

export const verifyEmailRegistrationReducer = createReducer(
  initialState,
  on(verifyEmailRegistrationAction, (state) => ({ ...state, isLoading: true })),
  on(verifyEmailRegistrationSuccessAction, (state) => ({
    ...state,
    isLoading: false,
    isSuccess: true,
    error: null,
  })),
  on(verifyEmailRegistrationFailAction, (state, action) => ({
    ...state,
    isLoading: false,
    isSuccess: false,
    error: action.error,
  }))
);
