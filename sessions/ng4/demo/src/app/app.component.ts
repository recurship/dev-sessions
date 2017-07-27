import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular v4 demo!';

  constructor(private router: Router) {
  }

  checkCurrentRoute(routeStr: string) {
      return this.router.url.split('/').indexOf(routeStr) !== -1;
  }
}
