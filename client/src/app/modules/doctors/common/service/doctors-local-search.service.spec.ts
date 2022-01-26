import { TestBed } from '@angular/core/testing';

import { DoctorsLocalSearchService } from './doctors-local-search.service';

describe('DoctorsLocalSearchService', () => {
  let service: DoctorsLocalSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsLocalSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
