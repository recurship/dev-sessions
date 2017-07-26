import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOfComponent } from './for-of.component';

describe('ForOfComponent', () => {
  let component: ForOfComponent;
  let fixture: ComponentFixture<ForOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
