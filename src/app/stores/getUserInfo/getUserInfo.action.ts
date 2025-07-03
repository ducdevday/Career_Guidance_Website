import { createAction, props } from '@ngrx/store';
import { UserInfo } from '../../shared/models/user-info';

export const getUserInfoAction = createAction(
  '[Get user info]'
);

export const getUserInfoSuccessAction = createAction(
  '[Get user info] success',
  props<{ data: UserInfo }>()
);

export const getUserInfoFailAction = createAction(
  '[Get user info] fail',
  props<{ error: string }>()
);

export const clearUserInfoAction = createAction(
  '[Clear user info]'
)

export const clearUserInfoSuccessAction = createAction(
  '[Clear user info] success',
  props<{ data: boolean }>()
);

export const clearUserInfoFailAction = createAction(
  '[Clear user info] fail',
  props<{ error: string }>()
);
