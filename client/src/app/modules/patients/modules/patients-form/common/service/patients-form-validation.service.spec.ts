import { TestBed } from '@angular/core/testing';

import { PatientsFormValidationService } from './patients-form-validation.service';

describe('PatientsFormValidationService', () => {
  let service: PatientsFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
