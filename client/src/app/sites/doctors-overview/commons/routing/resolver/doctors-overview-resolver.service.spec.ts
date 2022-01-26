import { TestBed } from '@angular/core/testing';

import { DoctorsOverviewResolverService } from './doctors-overview-resolver.service';

describe('DoctorsOverviewResolverService', () => {
  let service: DoctorsOverviewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsOverviewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
