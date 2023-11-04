import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('emailStorage')) {
  return true;
  } else {
    const router = inject(Router);
    return router.navigate(['/login']);
    //return true;
  }
};
