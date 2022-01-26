import { TestBed } from '@angular/core/testing';

import { DoctorsRestService } from './doctors-rest.service';

describe('DoctorsRestService', () => {
  let service: DoctorsRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
