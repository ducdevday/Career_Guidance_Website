import { createReducer, on } from '@ngrx/store';
import {
  clearUserInfoAction,
  clearUserInfoFailAction,
  clearUserInfoSuccessAction,
  getUserInfoAction,
  getUserInfoFailAction,
  getUserInfoSuccessAction,
} from './getUserInfo.action';
import { UserInfo } from '../../shared/models/user-info';

export interface GetUserInfoState {
  data: UserInfo | null;
  error: string | null;
  isSuccess: boolean;
}

export const initialState: GetUserInfoState = {
  data: null,
  error: null,
  isSuccess: false,
};

export const userReducer = createReducer(
  initialState,
  on(getUserInfoAction, (state) => ({ ...state, isSuccess: false })),
  on(getUserInfoSuccessAction, (state, action) => ({
    ...state,
    data: action.data,
    isSuccess: true,
  })),
  on(getUserInfoFailAction, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(clearUserInfoSuccessAction, (state, action) => (
    {...state,
      data: null
    }
  )),
  on(clearUserInfoFailAction, (state, action) => (
    {...state,
      error: action.error,
    }
  ))
);
