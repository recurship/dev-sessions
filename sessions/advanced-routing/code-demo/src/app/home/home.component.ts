import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private authService: AuthService, private route: ActivatedRoute) {
    }

    needLogin: boolean;

    ngOnInit() {
        this.route.params.subscribe((p) => {
            this.needLogin = (p['needLogin'] === 'true');
        });
    }

    login() {
        this.authService.login();
        this.needLogin = false;
    }

    logout() {
        this.authService.logout();
    }

    get userName() {
        return this.authService.userName;
    }
}
