import { TestBed } from '@angular/core/testing';

import { NursesFormValidationService } from './nurses-form-validation.service';

describe('NursesFormValidationService', () => {
  let service: NursesFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
