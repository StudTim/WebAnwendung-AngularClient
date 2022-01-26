import { TestBed } from '@angular/core/testing';

import { PatientHistoryRestService } from './patient-history-rest.service';

describe('PatientHistoryRestService', () => {
  let service: PatientHistoryRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientHistoryRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
