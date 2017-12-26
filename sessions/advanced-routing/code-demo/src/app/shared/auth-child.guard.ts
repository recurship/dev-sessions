import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthChildGuard implements CanActivateChild {

    constructor(private authService: AuthService) {
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.isLoggedIn;
    }
}
