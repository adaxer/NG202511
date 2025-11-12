import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';

export const canAddMovieGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  // prüfen, ob der Nutzer eingeloggt ist
  const isAuth = userService.isAuthenticated();

  if (!isAuth) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};