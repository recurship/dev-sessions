import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfileSecurityComponent } from './sidebar-profile-security.component';

describe('SidebarProfileSecurityComponent', () => {
  let component: SidebarProfileSecurityComponent;
  let fixture: ComponentFixture<SidebarProfileSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProfileSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProfileSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
