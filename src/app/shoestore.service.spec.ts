import { TestBed } from '@angular/core/testing';

import { shoestoreService } from './shoestore.service';

describe('shoestoreService', () => {
  let service: shoestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(shoestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
