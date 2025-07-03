import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import * as loginEffects from './stores/login/login.effect';
import * as signUpEffects from './stores/signup/signup.effect';
import * as verifyEmailRegistrationEffects from './stores/verify-email-registration/verify-email-registration.effect';
import * as forgotPasswordEffects from './stores/forgotPassword/forgot-password.effect';
import * as userInfoEffects from './stores/getUserInfo/getUserInfo.effect';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  provideCacheableAnimationLoader,
  provideLottieOptions,
} from 'ngx-lottie';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { reducers } from './stores/app.reducer';
import { authInterceptor } from './cores/interceptors/auth.interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    provideCacheableAnimationLoader(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(reducers),
    provideEffects([
      loginEffects,
      signUpEffects,
      verifyEmailRegistrationEffects,
      forgotPasswordEffects,
      userInfoEffects
    ]),
    MessageService,
  ],
};
