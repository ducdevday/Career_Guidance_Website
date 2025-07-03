import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import {
  loginAction,
  loginFailAction,
  loginSuccessAction,
} from './login.action';
import { ToastService } from '../../services/toast.service';
import { LoadingService } from '../../services/loading.service';
import { HOME_ROUTE } from '../../modules/guest/guest.routes';
import { LoginRequest } from '../../dtos/request/login-request';
import { ApiService } from '../../services/api.service';
import { ACCESS_TOKEN_KEY, LocalStorageService, USER_KEY } from '../../services/local-storage.service';
import { UserInfo } from '../../shared/models/user-info';

export const loginEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    const authService = inject(AuthService);
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(loginAction),
      switchMap((data) => {
        loadingService.show();
        return authService.login(data.request).pipe(
          map((response) => loginSuccessAction({ cre: response })),
          catchError((err) =>{
            return of(loginFailAction({ error: apiService.parseHttpError(err) }))}
          )
        );
      })
    );
  },
  { functional: true }
);

export const loginSuccessEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const router = inject(Router);
    const loadingService = inject(LoadingService);
    const localStorageService = inject(LocalStorageService);

    return actions$.pipe(
      ofType(loginSuccessAction),
      tap((data) => {
        if(data.cre.data){
          var user : UserInfo = {
            userId: data.cre.data?.userId,
            fullName: data.cre.data.fullName, 
            role: data.cre.data.role
          };
          var accessToken = data.cre.data.accessToken;
          localStorageService.set(USER_KEY, JSON.stringify(user));
          localStorageService.set(ACCESS_TOKEN_KEY, accessToken);
        }
        loadingService.hide();
        router.navigate([HOME_ROUTE]);
      })
    );
  },
  { dispatch: false, functional: true }
);

export const loginFailEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const toastService = inject(ToastService);
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(loginFailAction),
      tap((data) => {
        loadingService.hide();
        toastService.showError('Error', data.error);
      })
    );
  },
  { dispatch: false, functional: true }
);
