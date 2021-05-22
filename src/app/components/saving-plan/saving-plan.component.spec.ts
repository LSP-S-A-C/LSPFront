import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingPlanComponent } from './saving-plan.component';

describe('SavingPlanComponent', () => {
  let component: SavingPlanComponent;
  let fixture: ComponentFixture<SavingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
