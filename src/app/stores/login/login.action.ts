import { createAction, props } from '@ngrx/store';
import { LoginResponse } from '../../dtos/response/login-response';
import { LoginRequest } from '../../dtos/request/login-request';

export const loginAction = createAction(
  '[Login]',
  props<{ request: LoginRequest}>()
);

export const loginSuccessAction = createAction(
  '[Login] success',
  props<{ cre: LoginResponse }>()
);

export const loginFailAction = createAction(
  '[Login] fail',
  props<{ error: string }>()
);