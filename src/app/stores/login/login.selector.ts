import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>('login');

export const selectCre = createSelector(selectLoginState, (state) => state.cre);

export const selectError = createSelector(
  selectLoginState,
  (state) => state.error
);
