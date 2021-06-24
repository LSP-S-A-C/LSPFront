import { TestBed } from '@angular/core/testing';

import { goalStorageService } from './goal-info.service.ts.service';

describe('GoalInfo.Service.TsService', () => {
  let service: goalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(goalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
