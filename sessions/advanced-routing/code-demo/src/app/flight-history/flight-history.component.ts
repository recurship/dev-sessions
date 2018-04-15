import { Component } from '@angular/core';

@Component({
  template: `

<div class="gray-bg"></div>
<div class="flight-history">

<div class="flight-history-inside">
<div class="list-group">
  <a href="#" class="list-group-item disabled">
    History [<a [routerLink]="['/', {outlets: { aux: null}}]">x</a>]
  </a>
  <a class="list-group-item">Graz - Hamburg</a>
  <a class="list-group-item">Graz - Frankfurt</a>
  <a class="list-group-item">Hamburg - Graz</a>
  <a class="list-group-item">Frankfurt - Graz</a>
  <a class="list-group-item">München - Graz</a>
  <a class="list-group-item">Graz - München</a>
</div>
</div>
</div>

`,
  // styleUrls: ['./flight-history.component.css']
})
export class FlightHistoryComponent {

}

