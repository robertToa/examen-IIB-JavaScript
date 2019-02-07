import { TestBed } from '@angular/core/testing';

import { IsAdministradorServiceService } from './is-administrador-service.service';

describe('IsAdministradorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsAdministradorServiceService = TestBed.get(IsAdministradorServiceService);
    expect(service).toBeTruthy();
  });
});
