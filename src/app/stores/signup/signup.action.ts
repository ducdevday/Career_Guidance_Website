import { createAction, props } from '@ngrx/store';
import { SignUpRequest } from '../../dtos/request/signup-request';
import { SignUpResponse } from '../../dtos/response/signup-response';

export const signupAction = createAction(
  '[Signup]',
  props<{ request: SignUpRequest}>()
);

export const signupSuccessAction = createAction(
  '[Signup] success',
  props<{ data: SignUpResponse }>()
);

export const signupFailAction = createAction(
  '[Signup] fail',
  props<{ error: string }>()
);