import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { slideIn, SidebarAnimatedPanel } from '../common/animations';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [ slideIn ]
})
export class SidebarComponent extends SidebarAnimatedPanel implements OnInit {
  ngOnInit() {
  }
}
