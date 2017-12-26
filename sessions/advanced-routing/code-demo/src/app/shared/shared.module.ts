import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidatorDirective } from './validation/city.validator';
import { RoundTripDirective } from './validation/roundtrip.validator';
import { AsyncCityValidatorDirective } from './validation/async-city.validator';
import { DateComponent } from './date/date.component';
import { CustomPreloadingStrategy } from './preload/custom-preloading.strategy';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from './auth.guard';
import { AuthChildGuard } from './auth-child.guard';
import { ExitGuard } from './exit.guard';
import { FlightResolver } from '../flight-booking/services/flight.resolver';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTripDirective,
        DateComponent
    ],
    providers: [
        AuthGuard,
        ExitGuard,
        // AuthService,
        CustomPreloadingStrategy,
        AuthChildGuard,
        FlightResolver
    ],
    exports: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTripDirective,
        DateComponent
    ]
})
export class SharedModule {
}
