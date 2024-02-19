import { TestBed } from '@angular/core/testing';

import { ColleccionsService } from './colleccions.service';

describe('ColleccionsService', () => {
  let service: ColleccionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColleccionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
