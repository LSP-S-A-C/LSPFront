import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalInfoFourComponent } from './goal-info-four.component';

describe('GoalInfoFourComponent', () => {
  let component: GoalInfoFourComponent;
  let fixture: ComponentFixture<GoalInfoFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalInfoFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalInfoFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
