import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseComponent } from './if-else.component';

describe('IfElseComponent', () => {
  let component: IfElseComponent;
  let fixture: ComponentFixture<IfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
