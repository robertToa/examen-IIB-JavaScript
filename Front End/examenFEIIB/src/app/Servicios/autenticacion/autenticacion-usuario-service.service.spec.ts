import { TestBed } from '@angular/core/testing';

import { AutenticacionUsuarioServiceService } from './autenticacion-usuario-service.service';

describe('AutenticacionUsuarioServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticacionUsuarioServiceService = TestBed.get(AutenticacionUsuarioServiceService);
    expect(service).toBeTruthy();
  });
});
