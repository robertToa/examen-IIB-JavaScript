import { TestBed } from '@angular/core/testing';

import { IsUsuarioServiceService } from './is-usuario-service.service';

describe('IsUsuarioServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsUsuarioServiceService = TestBed.get(IsUsuarioServiceService);
    expect(service).toBeTruthy();
  });
});
