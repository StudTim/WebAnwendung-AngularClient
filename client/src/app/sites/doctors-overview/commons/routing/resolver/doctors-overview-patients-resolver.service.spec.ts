import { TestBed } from '@angular/core/testing';

import { DoctorsOverviewPatientsResolverService } from './doctors-overview-patients-resolver.service';

describe('DoctorsOverviewPatientsResolverService', () => {
  let service: DoctorsOverviewPatientsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsOverviewPatientsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
