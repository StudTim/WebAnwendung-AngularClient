import { TestBed } from '@angular/core/testing';

import { DoctorsPatientsRestService } from './doctors-patients-rest.service';

describe('DoctorsPatientsRestService', () => {
  let service: DoctorsPatientsRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsPatientsRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
