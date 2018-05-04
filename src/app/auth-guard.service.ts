import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

<<<<<<< HEAD
constructor(protected router: Router, protected authService: AuthService) { }
 
=======
  constructor(
    protected router: Router,
    protected authService: AuthService) { }

>>>>>>> df1d91b9832a2755019677c9ee3fcd1092de4700
  canActivate() {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login']);
    return false;
  }
}

