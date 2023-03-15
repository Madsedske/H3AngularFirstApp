import { TestBed } from '@angular/core/testing';

import { ECarsServiceService } from './ecars-service.service';

describe('ECarsServiceService', () => {
  let service: ECarsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ECarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
