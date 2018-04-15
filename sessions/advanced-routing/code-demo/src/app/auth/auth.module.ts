import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './auth.service';
@NgModule({
    providers: []
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                AuthService
            ]
        };
    }
}
