import { Injectable } from '@angular/core';


export const USER_KEY = "user-info";
export const ACCESS_TOKEN_KEY = "accessToken";


@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  get(key: string): any {
    return localStorage.getItem(key);
  }

  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  destroy() {
    localStorage.clear();
  }
}
