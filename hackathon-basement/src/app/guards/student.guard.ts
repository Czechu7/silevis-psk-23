import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const studentGuard: CanActivateFn = (route, state) => {
  const studentGuard = inject(AuthService);

  return studentGuard.loggedUser$.getValue();
};
