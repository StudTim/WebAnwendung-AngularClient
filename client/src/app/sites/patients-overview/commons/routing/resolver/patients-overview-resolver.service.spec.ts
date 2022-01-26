import { TestBed } from '@angular/core/testing';

import { PatientsOverviewResolverService } from './patients-overview-resolver.service';

describe('PatientsOverviewResolverService', () => {
  let service: PatientsOverviewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsOverviewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
