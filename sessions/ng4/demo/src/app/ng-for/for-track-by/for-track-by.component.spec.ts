import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTrackByComponent } from './for-track-by.component';

describe('ForTrackByComponent', () => {
  let component: ForTrackByComponent;
  let fixture: ComponentFixture<ForTrackByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
