import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GetUserInfoState } from './getUserInfo.reducer';
import { AppState } from '../app.state';

export const selectGetUserInfoState = (state: AppState) => state.getUserInfo;

export const selectUserData = createSelector(
  selectGetUserInfoState,
  (state: GetUserInfoState) => state?.data
);

export const selectIsSuccess = createSelector(
  selectGetUserInfoState,
  (state: GetUserInfoState) => state.isSuccess
);

export const selectError = createSelector(
  selectGetUserInfoState,
  (state: GetUserInfoState) => state.error
);
