import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const location = inject(Location);

  if (authService.isLoggedIn()) {
    location.back();
    return false;
  }

  return true;
};
