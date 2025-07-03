import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SignUpState } from "./signup.reducer";


export const selectSignUpState = createFeatureSelector<SignUpState>('signup');

export const selectData = createSelector(selectSignUpState, (state) => state.data);

export const selectError = createSelector(
 selectSignUpState,
  (state) => state.error
);
