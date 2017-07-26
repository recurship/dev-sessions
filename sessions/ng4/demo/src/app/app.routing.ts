import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { NgIfComponent } from 'app/ng-if/ng-if.component';
import { IfSimpleComponent } from 'app/ng-if/if-simple/if-simple.component';
import { IfLetComponent } from 'app/ng-if/if-let/if-let.component';
import { IfThenElseComponent } from 'app/ng-if/if-then-else/if-then-else.component';
import { IfElseComponent } from 'app/ng-if/if-else/if-else.component';
import { ForSimpleComponent } from 'app/ng-for/for-simple/for-simple.component';
import { ForOfComponent } from 'app/ng-for/for-of/for-of.component';
import { ForTrackByComponent } from 'app/ng-for/for-track-by/for-track-by.component';
import { NgForComponent } from 'app/ng-for/ng-for.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/ngIf', pathMatch: 'full' },
    {
        path: 'ngIf',
        component: NgIfComponent,
        children: [
            { path: '', redirectTo: 'if-simple', pathMatch: 'full' },
            { path: 'if-simple', component: IfSimpleComponent },
            { path: 'if-else', component: IfElseComponent },
            { path: 'if-then-else', component: IfThenElseComponent },
            { path: 'if-let', component: IfLetComponent },
        ]
    },
    {
        path: 'ngFor',
        component: NgForComponent,
        children: [
            { path: '', redirectTo: 'for-simple', pathMatch: 'full' },
            { path: 'for-simple', component: ForSimpleComponent },
            { path: 'for-of', component: ForOfComponent },
            { path: 'for-trackBy', component: ForTrackByComponent }
        ]
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { useHash: true });
