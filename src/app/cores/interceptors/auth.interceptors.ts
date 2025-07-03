import { HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "../../services/auth.service";
import { inject } from "@angular/core";
import { catchError, switchMap, throwError } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 const authService = inject(AuthService);
 if (req.url.endsWith('/refreshToken')) {
   return next(req);
 }

 const token = authService.getAccessToken();
 if (token) {
   req = addToken(req, token);
 }

 return next(req).pipe(
   catchError((error) => {
     if (error.status === 401) {
       return authService.refreshToken().pipe(
         switchMap((res) => {
           authService.setAccessToken(res.data);
           return next(addToken(req, res.data));
         }),
         catchError((err) => {
           authService.logout();
           return throwError(() => err);
         })
       );
     }
     return throwError(() => error);
   })
 );

 function addToken(request: any, token: string) {
   return request.clone({
     setHeaders: {
       Authorization: `Bearer ${token}`,
     },
   });
 }
};
