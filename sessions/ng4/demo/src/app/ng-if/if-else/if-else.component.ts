import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  show: boolean = true;
  auth$: Observable<{}> = Observable
      .of({username: 'chris', password: 'me@chris.me'})
      .delay(new Date(Date.now() + 4000));

  constructor() { }

  ngOnInit() {
  }

}
