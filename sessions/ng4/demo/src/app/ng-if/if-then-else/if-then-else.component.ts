import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-if-then-else',
  templateUrl: './if-then-else.component.html',
  styleUrls: ['./if-then-else.component.css']
})
export class IfThenElseComponent implements OnInit {

  show: boolean = true;
  thenBlock: TemplateRef<any> = null;
  @ViewChild('primaryBlock')
  primaryBlock: TemplateRef<any> = null;
  @ViewChild('secondaryBlock')
  secondaryBlock: TemplateRef<any> = null;

  isRedColor: boolean = true;

  constructor() { }

  ngOnInit() {
    this.thenBlock = this.primaryBlock;
  }

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }

}
