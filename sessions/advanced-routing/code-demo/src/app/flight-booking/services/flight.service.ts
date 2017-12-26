import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Flight } from '../../entities/flight';

// import data.
import { flightData } from '../../../data/flight';
import { flightsData } from '../../../data/flights';

@Injectable()
export class FlightService {

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string
    ) {
    }

    public flights: Array<Flight> = [];

    public flights$ = new BehaviorSubject([]);

    delay() {
        const ONE_MINUTE = 1000 * 60;

        const oldFlights = this.flights;
        const oldFlight = oldFlights[0];
        const oldDate = new Date(oldFlight.date);
        const newDate = new Date(oldDate.getTime() + ONE_MINUTE * 15);

        const newFlight: Flight = {
            id: oldFlight.id,
            from: oldFlight.from,
            to: oldFlight.to,
            date: newDate.toISOString()
        };

        const newFlights = [
            newFlight,
            ...oldFlights.slice(1)
        ];

        this.flights = newFlights;
        this.flights$.next(newFlights);
    }


    findById(id: string): Observable<Flight> {
        /*
        // let url = this.baseUrl + "/api/flight";
        const url = '/data/flight.json';

        const headers = new Headers();
        headers.set('Accept', 'text/json');

        const search = new URLSearchParams();
        search.set('id', id);

        return this
            .http
            .get(url, { headers, search })
            .map(resp => resp.json());
        */

        return new Observable(observer => {
            observer.next(flightData);
        });
    }

    find(from: string, to: string): void {
        /*
        // let url = this.baseUrl + "/api/flight";
        const url = '/data/flights.json';

        const headers = new Headers();
        headers.set('Accept', 'text/json');

        const search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        this
            .http
            .get(url, { headers, search })
            .map(resp => resp.json())
            .subscribe(
            (flights) => {
                this.flights = flights;
                this.flights$.next(flights);
            },
            (err) => { console.warn(err); }
            );
        */
        const items = flightsData.filter(item => item.from === from && item.to === to);
        this.flights = items;
        this.flights$.next(items);
    }

}
