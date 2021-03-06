import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingGoalsComponent } from './saving-goals.component';

describe('SavingGoalsComponent', () => {
  let component: SavingGoalsComponent;
  let fixture: ComponentFixture<SavingGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
