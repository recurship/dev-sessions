import { Component, OnInit } from '@angular/core';
import { slideIn, SidebarAnimatedPanel } from '../common/animations';

@Component({
  selector: 'app-sidebar-profile-security',
  templateUrl: './sidebar-profile-security.component.html',
  styleUrls: ['./sidebar-profile-security.component.css'],
  animations: [ slideIn ]
})
export class SidebarProfileSecurityComponent extends SidebarAnimatedPanel implements OnInit {

  ngOnInit() {
  }

}
