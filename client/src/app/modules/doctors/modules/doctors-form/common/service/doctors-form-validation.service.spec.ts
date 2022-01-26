import { TestBed } from '@angular/core/testing';

import { DoctorsFormValidationService } from './doctors-form-validation.service';

describe('DoctorsFormValidationService', () => {
  let service: DoctorsFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
