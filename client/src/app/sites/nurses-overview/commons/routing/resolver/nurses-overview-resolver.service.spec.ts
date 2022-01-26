import { TestBed } from '@angular/core/testing';

import { NursesOverviewResolverService } from './nurses-overview-resolver.service';

describe('NursesOverviewResolverService', () => {
  let service: NursesOverviewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesOverviewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
