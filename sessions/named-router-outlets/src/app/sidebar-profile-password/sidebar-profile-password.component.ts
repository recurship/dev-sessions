import { Component, OnInit } from '@angular/core';
import { slideIn, SidebarAnimatedPanel } from '../common/animations';

@Component({
  selector: 'app-sidebar-profile-password',
  templateUrl: './sidebar-profile-password.component.html',
  styleUrls: ['./sidebar-profile-password.component.css'],
  animations: [ slideIn ]
})
export class SidebarProfilePasswordComponent extends SidebarAnimatedPanel implements OnInit {

  ngOnInit() {
  }

}
