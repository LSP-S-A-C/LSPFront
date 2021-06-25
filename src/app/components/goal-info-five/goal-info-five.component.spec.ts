import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalInfoFiveComponent } from './goal-info-five.component';

describe('GoalInfoFiveComponent', () => {
  let component: GoalInfoFiveComponent;
  let fixture: ComponentFixture<GoalInfoFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalInfoFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalInfoFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
