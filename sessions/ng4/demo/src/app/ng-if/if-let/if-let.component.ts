import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Rx";

@Component({
  selector: 'app-if-let',
  templateUrl: './if-let.component.html',
  styleUrls: ['./if-let.component.css']
})
export class IfLetComponent implements OnInit {

  user$ = new Subject<{first: string, last: string}>();
  first = ['John', 'Mike', 'Mary', 'Bob'];
  firstIndex = 0;
  last = ['Smith', 'Novotny', 'Angular'];
  lastIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  nextUser() {
    const first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) {
      this.firstIndex = 0;
    }
    const last = this.last[this.lastIndex++];
    if (this.lastIndex >= this.last.length) {
      this.lastIndex = 0;
    }
    this.user$.next({first, last});
  }

}
