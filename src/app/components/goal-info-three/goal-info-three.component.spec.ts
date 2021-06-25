import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalInfoThreeComponent } from './goal-info-three.component';

describe('GoalInfoThreeComponent', () => {
  let component: GoalInfoThreeComponent;
  let fixture: ComponentFixture<GoalInfoThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalInfoThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalInfoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
