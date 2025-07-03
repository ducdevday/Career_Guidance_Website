import { createAction, props } from '@ngrx/store';
import { VerifyEmailSignupRequest } from '../../dtos/request/verify-email-signup-request';

export const verifyEmailRegistrationAction = createAction(
  '[Verify Email Registration] Registration',
  props<{ request: VerifyEmailSignupRequest }>()
);

export const verifyEmailRegistrationSuccessAction = createAction(
  '[Verify Email Registration] Registration Success'
);

export const verifyEmailRegistrationFailAction = createAction(
  '[Verify Email Registration] Registration Fail',
  props<{ error: string }>()
);
