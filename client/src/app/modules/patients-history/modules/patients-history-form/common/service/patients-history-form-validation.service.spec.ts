import { TestBed } from '@angular/core/testing';

import { PatientsHistoryFormValidationService } from './patients-history-form-validation.service';

describe('PatientsHistoryFormValidationService', () => {
  let service: PatientsHistoryFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsHistoryFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
