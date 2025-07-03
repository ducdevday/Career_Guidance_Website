import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadingService } from '../../services/loading.service';
import {
  confirmSetNewPasswordAction,
  confirmSetNewPasswordFailAction,
  confirmSetNewPasswordSuccessAction,
  requestSetNewPasswordAction,
  requestSetNewPasswordFailAction,
  requestSetNewPasswordSuccessAction,
} from './forgot-password.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { LOGIN_ROUTE } from '../../modules/guest/guest.routes';

export const requestSetNewPasswordEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    const authService = inject(AuthService)
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(requestSetNewPasswordAction),
      switchMap((data) => {
        loadingService.show();
        return authService.forgotPassword(data.request).pipe(
          map((response) => requestSetNewPasswordSuccessAction(),
          catchError((err) =>{
            return of(requestSetNewPasswordFailAction({ error: apiService.parseHttpError(err) }))}
          )
        ));
      })
    );
  },
  { functional: true }
);

export const requestSetNewPasswordSuccessEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(requestSetNewPasswordSuccessAction),
      tap((data) => {
        loadingService.hide();
      })
    );
  },
  { dispatch: false, functional: true }
);

export const requestSetNewPasswordFailEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const loadingService = inject(LoadingService);
    const toastService = inject(ToastService);
    return actions$.pipe(
      ofType(requestSetNewPasswordFailAction),
      tap((data) => {
        loadingService.hide();
        toastService.showError('Error', data.error);
      })
    );
  },
  { dispatch: false, functional: true }
);

export const confirmSetNewPasswordEffect = createEffect(
  () => {
    const action$ = inject(Actions);
    const apiService = inject(ApiService);
    const authService = inject(AuthService);
    const loadingService = inject(LoadingService);
    return action$.pipe(
      ofType(confirmSetNewPasswordAction),
      switchMap((data) => {
        loadingService.show();
        return authService.setNewPassword(data.request).pipe(
          map((response) => confirmSetNewPasswordSuccessAction()),
          catchError((err) =>{
            return of(confirmSetNewPasswordFailAction({ error: apiService.parseHttpError(err) }))}
          )
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const confirmSetNewPasswordSuccessEffect = createEffect(
  () => {
    const action$ = inject(Actions);
    const loadingService = inject(LoadingService);
    const router = inject(Router);
    return action$.pipe(
      ofType(confirmSetNewPasswordSuccessAction),
      tap((data) => {
        loadingService.hide();
        router.navigate([`/${LOGIN_ROUTE}`]);
      })
    );
  },
  {
    dispatch: false,
    functional: true,
  }
);

export const confirmSetNewPasswordFailEffect = createEffect(
  () => {
    const action$ = inject(Actions);
    const loadingService = inject(LoadingService);
    const toastService = inject(ToastService);
    return action$.pipe(
      ofType(confirmSetNewPasswordFailAction),
      tap((data) => {
        loadingService.hide();
        toastService.showError('Error', data.error);
      })
    );
  },
  {
    dispatch: false,
    functional: true,
  }
);
