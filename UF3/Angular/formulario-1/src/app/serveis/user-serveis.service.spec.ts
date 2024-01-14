import { TestBed } from '@angular/core/testing';

import { UserServeisService } from './user-serveis.service';

describe('UserServeisService', () => {
  let service: UserServeisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServeisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
