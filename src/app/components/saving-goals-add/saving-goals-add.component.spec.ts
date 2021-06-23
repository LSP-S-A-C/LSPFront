import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingGoalsAddComponent } from './saving-goals-add.component';

describe('SavingGoalsAddComponent', () => {
  let component: SavingGoalsAddComponent;
  let fixture: ComponentFixture<SavingGoalsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingGoalsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingGoalsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
