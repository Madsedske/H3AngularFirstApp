import { TestBed } from '@angular/core/testing';

import { VittighederService } from './vittigheder.service';

describe('VittighederService', () => {
  let service: VittighederService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VittighederService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
