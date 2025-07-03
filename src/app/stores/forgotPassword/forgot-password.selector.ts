import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const forgotPasswordState = (state: AppState) => state.forgotPassword;

export const selectForgotPasswordStep = createSelector(
  forgotPasswordState,
  (state) => state.step
);

export const selectForgotPasswordError = createSelector(
  forgotPasswordState,
  (state) => state.error
);
