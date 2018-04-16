import { Component, OnInit } from '@angular/core';
import { slideIn, SidebarAnimatedPanel } from '../common/animations';

@Component({
  selector: 'app-sidebar-profile-email',
  templateUrl: './sidebar-profile-email.component.html',
  styleUrls: ['./sidebar-profile-email.component.css'],
  animations: [ slideIn ]
})
export class SidebarProfileEmailComponent extends SidebarAnimatedPanel  implements OnInit {

  ngOnInit() {
  }

}
