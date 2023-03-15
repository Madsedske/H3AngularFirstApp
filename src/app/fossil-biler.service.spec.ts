import { TestBed } from '@angular/core/testing';

import { FossilBilerService } from './fossil-biler.service';

describe('FossilBilerService', () => {
  let service: FossilBilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FossilBilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
