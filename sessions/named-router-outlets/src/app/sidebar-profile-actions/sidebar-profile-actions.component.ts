import { Component, OnInit } from '@angular/core';
import { slideIn, SidebarAnimatedPanel } from '../common/animations';

@Component({
  selector: 'app-sidebar-profile-actions',
  templateUrl: './sidebar-profile-actions.component.html',
  styleUrls: ['./sidebar-profile-actions.component.css'],
  animations: [ slideIn ]
})
export class SidebarProfileActionsComponent extends SidebarAnimatedPanel implements OnInit {

  ngOnInit() {
  }

}
