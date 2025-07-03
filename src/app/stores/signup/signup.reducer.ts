import { createReducer, on } from '@ngrx/store';

import { signupAction, signupFailAction, signupSuccessAction } from './signup.action';
import { SignUpResponse } from '../../dtos/response/signup-response';

export interface SignUpState {
  data: SignUpResponse | null;
  error: string | null;
}

export const initialState: SignUpState = {
  data: null,
  error: null,
};

export const signUpReducer = createReducer(
  initialState,
  on(signupAction, state => ({ ...state, data: null, error: null })),
  on(signupSuccessAction, (state, action) => ({ ...state, data: action.data })),
  on(signupFailAction, (state, action) => ({ ...state, error: action.error }))
);