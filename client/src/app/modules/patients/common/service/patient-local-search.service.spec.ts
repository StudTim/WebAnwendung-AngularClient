import { TestBed } from '@angular/core/testing';

import { PatientLocalSearchService } from './patient-local-search.service';

describe('PatientLocalSearchService', () => {
  let service: PatientLocalSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientLocalSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
