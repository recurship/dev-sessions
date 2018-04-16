import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfileEmailComponent } from './sidebar-profile-email.component';

describe('SidebarProfileEmailComponent', () => {
  let component: SidebarProfileEmailComponent;
  let fixture: ComponentFixture<SidebarProfileEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProfileEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProfileEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
