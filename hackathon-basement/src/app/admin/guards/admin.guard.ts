import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authGuard = inject(AuthService);

  const status = authGuard.loggedUserData$.getValue()?.staffStatus;

  return status === 2 ? true : false;
};
