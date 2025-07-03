import { createAction, props } from '@ngrx/store';
import { ForgotPasswordRequest } from '../../dtos/request/forgot-password-request';
import { SetNewPasswordRequest } from '../../dtos/request/set-new-password-request';

export const requestSetNewPasswordAction = createAction(
  '[Forgot Password] Request Set New Password',
  props<{ request: ForgotPasswordRequest }>()
);

export const requestSetNewPasswordSuccessAction = createAction(
  '[Forgot Password] Request Set New Password Success'
);

export const requestSetNewPasswordFailAction = createAction(
  '[Forgot Password] Request Set New Password Failure',
  props<{ error: string }>()
);

export const confirmSetNewPasswordAction = createAction(
  '[Forgot Password] Confirm Set New Password',
  props<{ request: SetNewPasswordRequest }>()
);

export const confirmSetNewPasswordSuccessAction = createAction(
  '[Forgot Password] Confirm Set New Password Success'
);

export const confirmSetNewPasswordFailAction = createAction(
  '[Forgot Password] Confirm Set New Password Fail',
  props<{ error: string }>()
);
