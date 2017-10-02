import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSimpleComponent } from './for-simple.component';

describe('ForSimpleComponent', () => {
  let component: ForSimpleComponent;
  let fixture: ComponentFixture<ForSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
