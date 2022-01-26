import { TestBed } from '@angular/core/testing';

import { IdentifierGeneratorService } from './identifier-generator.service';

describe('IdentifierGeneratorService', () => {
  let service: IdentifierGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentifierGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
