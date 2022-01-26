import { TestBed } from '@angular/core/testing';

import { NursesLocalSearchService } from './nurses-local-search.service';

describe('NursesLocalSearchService', () => {
  let service: NursesLocalSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesLocalSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
