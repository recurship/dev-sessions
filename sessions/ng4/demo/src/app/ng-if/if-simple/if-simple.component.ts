import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-simple',
  templateUrl: './if-simple.component.html',
  styleUrls: ['./if-simple.component.css']
})
export class IfSimpleComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
