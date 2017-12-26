import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private _userName = '';

    public login(): void {
        this._userName = 'Max';
    }

    public logout(): void {
        this._userName = '';
    }

    public get isLoggedIn(): boolean {
        return this._userName !== '';
    }

    public get userName(): string {
        return this._userName;
    }

}
