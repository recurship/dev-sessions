import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-for-of',
  templateUrl: './for-of.component.html',
  styleUrls: ['./for-of.component.css']
})
export class ForOfComponent implements OnInit {

  heroes$ = Observable.of([
      {id: 1, name: 'Superman'},
      {id: 2, name: 'Batman'},
      {id: 5, name: 'BatGirl'},
      {id: 3, name: 'Robin'},
      {id: 4, name: 'Flash'}
  ]);
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, hero) {
    return hero ? hero.id : undefined;
  }

}
