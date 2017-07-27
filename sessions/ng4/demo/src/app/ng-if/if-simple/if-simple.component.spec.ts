import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfSimpleComponent } from './if-simple.component';

describe('IfSimpleComponent', () => {
  let component: IfSimpleComponent;
  let fixture: ComponentFixture<IfSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
