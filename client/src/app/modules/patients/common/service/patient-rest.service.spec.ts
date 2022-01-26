import { TestBed } from '@angular/core/testing';

import { PatientRestService } from './patient-rest.service';

describe('PatientRestService', () => {
  let service: PatientRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
