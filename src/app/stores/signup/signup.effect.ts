import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { ToastService } from '../../services/toast.service';
import { LoadingService } from '../../services/loading.service';
import { HOME_ROUTE, VERIFY_EMAIL_REGISTRATION_ROUTE } from '../../modules/guest/guest.routes';
import { ApiService } from '../../services/api.service';
import { signupAction, signupFailAction, signupSuccessAction } from './signup.action';

export const signUpEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    const authService = inject(AuthService);
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(signupAction),
      switchMap((data) => {
        loadingService.show();
        return authService.signup(data.request).pipe(
          map((response) => signupSuccessAction({ data: {...response, } })),
          catchError((err) =>{
            return of(signupFailAction({ error: apiService.parseHttpError(err) }))}
          )
        );
      })
    );
  },
  { functional: true }
);

export const signUpSuccessEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const router = inject(Router);
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(signupSuccessAction),
      tap((data) => {
        loadingService.hide();
        router.navigate([`/${VERIFY_EMAIL_REGISTRATION_ROUTE}`], {
          queryParams: { email: data.data },
        });
      })
    );
  },
  { dispatch: false, functional: true }
);

export const signUpFailEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const toastService = inject(ToastService);
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(signupFailAction),
      tap((data) => {
        loadingService.hide();
        toastService.showError('Error', data.error);
      })
    );
  },
  { dispatch: false, functional: true }
);
