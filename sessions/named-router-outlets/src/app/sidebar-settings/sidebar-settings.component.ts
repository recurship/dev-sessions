import { Component, OnInit } from '@angular/core';
import { slideIn, SidebarAnimatedPanel } from '../common/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-settings',
  templateUrl: './sidebar-settings.component.html',
  styleUrls: ['./sidebar-settings.component.css'],
  animations: [ slideIn ]
})
export class SidebarSettingsComponent extends SidebarAnimatedPanel implements OnInit {

  params$ = this.activatedRoute.params;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    
  }

}
