import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalInfoComponent } from './goal-info.component';

describe('GoalInfoComponent', () => {
  let component: GoalInfoComponent;
  let fixture: ComponentFixture<GoalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
