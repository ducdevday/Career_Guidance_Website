import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  clearUserInfoAction,
  clearUserInfoFailAction,
  clearUserInfoSuccessAction,
  getUserInfoAction,
  getUserInfoFailAction,
  getUserInfoSuccessAction,
} from './getUserInfo.action';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ApiService } from '../../services/api.service';

export const getUserInfoEffect = createEffect(
  () => {
    const action$ = inject(Actions);
    const authService = inject(AuthService);

    return action$.pipe(
      ofType(getUserInfoAction),
      switchMap(() => {
        return authService.getUserInfo().pipe(
          map((response) => getUserInfoSuccessAction({data: response}),
          catchError((err) =>{
            return of(getUserInfoFailAction({ error: 'Something went wrong' }))}
          )
        )
        );
      })
    );
  },
  { functional: true }
);

export const getUserInfoSuccessEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    return actions$.pipe(
      ofType(getUserInfoSuccessAction),
      tap((data) => {
      })
    );
  },
  { dispatch: false, functional: true }
);

export const getUserInfoFailEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const toastService = inject(ToastService);

    return actions$.pipe(
      ofType(getUserInfoFailAction),
      tap((data) => {
        toastService.showError('Error', data.error);
      })
    );
  },
  { dispatch: false, functional: true }
);

export const clearUserInfoEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const authService = inject(AuthService);
    const apiService = inject(ApiService);
    const loadingService = inject(LoadingService);

    return actions$.pipe(
      ofType(clearUserInfoAction),
      switchMap(() => {
        loadingService.show();

        return authService.logout().pipe(
          map((response) => clearUserInfoSuccessAction({ data: response.data })),
          catchError((err) =>
            of(clearUserInfoFailAction({ error: apiService.parseHttpError(err) }))
          )
        );
      })
    );
  },
  { functional: true }
);
export const clearUserInfoSuccessEffect = createEffect(() => {
  const actions$ = inject(Actions);
  const router = inject(Router);
  const loadingService = inject(LoadingService);
  const localStorageService = inject(LocalStorageService)
  return actions$.pipe(
    ofType(clearUserInfoSuccessAction),
    tap((data) => {
      console.log("clearUserInfoSuccessEffect")
      loadingService.hide();
      localStorageService.destroy();
      router.navigate(['/']);
    })
  )
}, {dispatch: false, functional: true})

export const clearUserInfoFailEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const toastService = inject(ToastService);

    return actions$.pipe(
      ofType(clearUserInfoFailAction),
      tap((data) => {
        toastService.showError('Error', data.error);
      })
    );
  },
  { dispatch: false, functional: true }
);