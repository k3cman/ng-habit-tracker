import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekRepeatableWrapperComponent } from './week-repeatable-wrapper.component';

describe('WeekRepeatableWrapperComponent', () => {
  let component: WeekRepeatableWrapperComponent;
  let fixture: ComponentFixture<WeekRepeatableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekRepeatableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekRepeatableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
