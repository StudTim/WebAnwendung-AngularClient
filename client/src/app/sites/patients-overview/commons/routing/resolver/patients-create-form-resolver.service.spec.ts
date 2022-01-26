import { TestBed } from '@angular/core/testing';

import { PatientsCreateFormResolverService } from './patients-create-form-resolver.service';

describe('PatientsCreateFormResolverService', () => {
  let service: PatientsCreateFormResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsCreateFormResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
