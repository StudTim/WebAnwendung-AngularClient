import { TestBed } from '@angular/core/testing';

import { PatientsHistoryResolverService } from './patients-history-resolver.service';

describe('PatientsHistoryResolverService', () => {
  let service: PatientsHistoryResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsHistoryResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
