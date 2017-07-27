import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfLetComponent } from './if-let.component';

describe('IfLetComponent', () => {
  let component: IfLetComponent;
  let fixture: ComponentFixture<IfLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
