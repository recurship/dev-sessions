import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-for-simple',
  templateUrl: './for-simple.component.html',
  styleUrls: ['./for-simple.component.css']
})
export class ForSimpleComponent implements OnInit {

  heroes$ = Observable.of([
      {id: 1, name: 'Superman'},
      {id: 2, name: 'Batman'},
      {id: 5, name: 'BatGirl'},
      {id: 3, name: 'Robin'},
      {id: 4, name: 'Flash'}
  ]);

  constructor() {
  }

  ngOnInit() {
  }

}
