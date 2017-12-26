import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';
import { ExitComponent } from '../../shared/exit.component';

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements ExitComponent, OnInit {

    id: string;
    flight: Flight;

    constructor(
        private route: ActivatedRoute,
        private flightService: FlightService
    ) {
    }

    exitWarning = {
        show: false,
        resolve: null
    };

    decide(decision: boolean) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    }

    canDeactivate(): Promise<boolean> {
        return new Promise<boolean>((resolve: Function) => {
            this.exitWarning.show = true;
            this.exitWarning.resolve = resolve;
        });
    }

    ngOnInit() {
        /*
        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.flightService.findById(this.id).subscribe(
                (flight) => {
                    this.flight = flight;
                },
                (err) => {
                    console.error(err);
                }
            )

        });
        */

        this.route.data.subscribe((d) => {
            this.flight = d['flight'];
        });
    }

    save() {
        console.log('not implemented yet!');
    }

}
