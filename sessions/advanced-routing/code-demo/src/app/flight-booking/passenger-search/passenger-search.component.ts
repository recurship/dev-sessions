import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent {
    name: string;

    constructor(authService: AuthService) {
        this.name = authService.userName;
    }
}
