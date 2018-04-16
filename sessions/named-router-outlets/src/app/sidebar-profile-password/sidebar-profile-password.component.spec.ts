import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfilePasswordComponent } from './sidebar-profile-password.component';

describe('SidebarProfilePasswordComponent', () => {
  let component: SidebarProfilePasswordComponent;
  let fixture: ComponentFixture<SidebarProfilePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProfilePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProfilePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
