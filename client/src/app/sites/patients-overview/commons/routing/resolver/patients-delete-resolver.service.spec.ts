import { TestBed } from '@angular/core/testing';

import { PatientsDeleteResolverService } from './patients-delete-resolver.service';

describe('PatientsDeleteResolverService', () => {
  let service: PatientsDeleteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsDeleteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
