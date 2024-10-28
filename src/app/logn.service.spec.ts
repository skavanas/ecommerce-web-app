import { TestBed } from '@angular/core/testing';

import { LognService } from './logn.service';

describe('LognService', () => {
  let service: LognService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LognService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
