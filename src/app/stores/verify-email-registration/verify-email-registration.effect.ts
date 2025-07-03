import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadingService } from '../../services/loading.service';
import {
  verifyEmailRegistrationAction,
  verifyEmailRegistrationFailAction,
  verifyEmailRegistrationSuccessAction,
} from './verify-email-registration.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { LOGIN_ROUTE } from '../../modules/guest/guest.routes';

export const verifyEmailRegistrationEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    const authService = inject(AuthService);
    const loadingService = inject(LoadingService);
    return actions$.pipe(
      ofType(verifyEmailRegistrationAction),
      switchMap((data) => {
        loadingService.show();
        return authService.verifyEmailRegistration(data.request).pipe(
          map((response) => 
             verifyEmailRegistrationSuccessAction()
          ),
          catchError((err) =>{
            return of(verifyEmailRegistrationFailAction({ error: apiService.parseHttpError(err) }))}
          )
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const verifyEmailRegistrationSuccessEffect = createEffect(
  () => {
    const action$ = inject(Actions);
    const loadingService = inject(LoadingService);
    const toastService = inject(ToastService);
    const router = inject(Router);
    return action$.pipe(
      ofType(verifyEmailRegistrationSuccessAction),
      tap(() => {
        loadingService.hide();
        toastService.showSuccess(
          'Success',
          'Email Registration Verified Success'
        );
        router.navigate([`/${LOGIN_ROUTE}`]);
      })
    );
  },
  {
    dispatch: false,
    functional: true,
  }
);

export const verifyEmailRegistrationFailEffect = createEffect(
  () => {
    const action$ = inject(Actions);
    const loadingService = inject(LoadingService);
    const toastService = inject(ToastService);
    return action$.pipe(
      ofType(verifyEmailRegistrationFailAction),
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
