import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarProfileComponent } from './sidebar-profile/sidebar-profile.component';
import { SidebarSettingsComponent } from './sidebar-settings/sidebar-settings.component';
import { SidebarProfilePasswordComponent } from './sidebar-profile-password/sidebar-profile-password.component';
import { SidebarProfileSecurityComponent } from './sidebar-profile-security/sidebar-profile-security.component';
import { SidebarProfileEmailComponent } from './sidebar-profile-email/sidebar-profile-email.component';
import { SidebarProfileActionsComponent } from './sidebar-profile-actions/sidebar-profile-actions.component';
import { MymodalComponent } from './mymodal/mymodal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarProfileComponent,
    SidebarSettingsComponent,
    SidebarProfilePasswordComponent,
    SidebarProfileSecurityComponent,
    SidebarProfileEmailComponent,
    SidebarProfileActionsComponent,
    MymodalComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'page', component: PageComponent },
      { path: 'aside', outlet: 'sidebar', component: SidebarComponent },
      { path: 'settings/:userid', outlet: 'sidebar', component: SidebarSettingsComponent },
      { path: 'profile', outlet: 'sidebar', component: SidebarProfileComponent, children: [
        { path: '', outlet: 'profile', component: SidebarProfileActionsComponent },
        { path: 'password', outlet: 'profile', component: SidebarProfilePasswordComponent },
        { path: 'email', outlet: 'profile', component: SidebarProfileEmailComponent },
        { path: 'security', outlet: 'profile', component: SidebarProfileSecurityComponent },
      ]},
      { path: 'mymodal/:userid', outlet: 'modal', component: MymodalComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
