import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ExitComponent } from './exit.component';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ExitGuard implements CanDeactivate<ExitComponent> {
    canDeactivate(component: ExitComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return component.canDeactivate();
    }
}
