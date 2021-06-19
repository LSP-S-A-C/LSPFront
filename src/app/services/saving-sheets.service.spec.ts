import { TestBed } from '@angular/core/testing';

import { SavingSheetsService } from './saving-sheets.service';

describe('SavingSheetsService', () => {
  let service: SavingSheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingSheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
