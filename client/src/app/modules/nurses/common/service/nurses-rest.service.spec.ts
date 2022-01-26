import { TestBed } from '@angular/core/testing';

import { NursesRestService } from './nurses-rest.service';

describe('NursesRestService', () => {
  let service: NursesRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
