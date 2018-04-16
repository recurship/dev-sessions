import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfileActionsComponent } from './sidebar-profile-actions.component';

describe('SidebarProfileActionsComponent', () => {
  let component: SidebarProfileActionsComponent;
  let fixture: ComponentFixture<SidebarProfileActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProfileActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProfileActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
