import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment';
import { Observable, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ACCESS_TOKEN_KEY, LocalStorageService, USER_KEY } from './local-storage.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../dtos/request/login-request';
import { LoginResponse } from '../dtos/response/login-response';
import { ApiService } from './api.service';
import { SignUpResponse } from '../dtos/response/signup-response';
import { SignUpRequest } from '../dtos/request/signup-request';
import { VerifyEmailSignupRequest } from '../dtos/request/verify-email-signup-request';
import { VerifyEmailSignupResponse } from '../dtos/response/verify-email-signup-response';
import { ForgotPasswordRequest } from '../dtos/request/forgot-password-request';
import { ForgotPasswordResponse } from '../dtos/response/forgot-password-response';
import { SetNewPasswordRequest } from '../dtos/request/set-new-password-request';
import { SetNewPasswordResponse } from '../dtos/response/set-new-password-response';
import { UserInfo } from '../shared/models/user-info';
import { LogoutResponse } from '../dtos/response/logout-reponse';
import { RefreshTokenResponse } from '../dtos/response/refresh-token-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'auth';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiService: ApiService 
  ) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.apiService.postData<LoginResponse>(`${this.authUrl}/login`, request)
      .pipe(
        tap((response) => {
          if(response.data){
            var user : UserInfo = {
              userId: response.data.userId,
              fullName: response.data.fullName, 
              role: response.data.role
            };
            var accessToken = response.data.accessToken;
            this.localStorageService.set(USER_KEY, JSON.stringify(user));
            this.localStorageService.set(ACCESS_TOKEN_KEY, accessToken);
          }
        })
      );
  }

  signup(request: SignUpRequest) : Observable<SignUpResponse>{
    return this.apiService.postData<SignUpResponse>(`${this.authUrl}/signup`, request);
  }

  verifyEmailRegistration(request: VerifyEmailSignupRequest) : Observable<VerifyEmailSignupResponse>{
    return this.apiService.postData<VerifyEmailSignupResponse>(`${this.authUrl}/verifyEmailSignUp`,request);
  }

  forgotPassword(request: ForgotPasswordRequest) : Observable<ForgotPasswordResponse>{
    return this.apiService.postData<ForgotPasswordResponse>(`${this.authUrl}/forgotPassword`,request);
  }

  setNewPassword(request: SetNewPasswordRequest) : Observable<SetNewPasswordResponse>{
    return this.apiService.postData<SetNewPasswordResponse>(`${this.authUrl}/setNewPassword`,request);
  }

  getUserInfo(): Observable<UserInfo> {
    const data = JSON.parse(this.localStorageService.get(USER_KEY)) as UserInfo;
    return of(data);
  }
  

  isLoggedIn(): boolean{
    return this.localStorageService.get(USER_KEY) != null || this.localStorageService.get(USER_KEY) != undefined
  }

  getAccessToken(): string{
    return this.localStorageService.get(ACCESS_TOKEN_KEY);
  }
  setAccessToken(token: string){
    this.localStorageService.set(ACCESS_TOKEN_KEY, token);
  }

  logout() : Observable<LogoutResponse> {
    return this.apiService.postData<LogoutResponse>(`${this.authUrl}/logout`,null);
  }

  refreshToken() : Observable<RefreshTokenResponse>{
    return this.apiService.postData<RefreshTokenResponse>(`${this.authUrl}/refreshToken`,null);
  }
}
