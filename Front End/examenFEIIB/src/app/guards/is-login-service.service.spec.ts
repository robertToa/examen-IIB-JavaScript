import { TestBed } from '@angular/core/testing';

import { IsLoginServiceService } from './is-login-service.service';

describe('IsLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsLoginServiceService = TestBed.get(IsLoginServiceService);
    expect(service).toBeTruthy();
  });
});
