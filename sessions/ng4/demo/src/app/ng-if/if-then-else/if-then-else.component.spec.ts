import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfThenElseComponent } from './if-then-else.component';

describe('IfThenElseComponent', () => {
  let component: IfThenElseComponent;
  let fixture: ComponentFixture<IfThenElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfThenElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfThenElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
