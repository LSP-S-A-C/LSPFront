import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalInfoTwoComponent } from './goal-info-two.component';

describe('GoalInfoTwoComponent', () => {
  let component: GoalInfoTwoComponent;
  let fixture: ComponentFixture<GoalInfoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalInfoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalInfoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
