import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Params } from '@angular/router';

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public info = 'Welt';

    public showWaitInfo = false;

    constructor(private router: Router) {

        router.events.subscribe(
            (event) => {

                if (event instanceof NavigationStart) {
                    this.showWaitInfo = true;
                }
                if (event instanceof NavigationEnd
                    || event instanceof NavigationCancel
                    || event instanceof NavigationError) {
                    this.showWaitInfo = false;
                }

            }
        );
    }

    goHome() {
        this.router.navigate(['/home']);
    }

    activateExpertMode() {
        const queryParams = {
            expertMode: 'true'
        };
        this.router.navigate([], { queryParams });
    }

    deactivateExpertMode() {
        const queryParams = {
            expertMode: 'false'
        };
        this.router.navigate([], { queryParams });
        // , fragment: '123'

    }

}



