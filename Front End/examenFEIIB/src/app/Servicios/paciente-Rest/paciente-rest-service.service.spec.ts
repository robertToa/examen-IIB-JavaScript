import { TestBed } from '@angular/core/testing';

import { PacienteRestServiceService } from './paciente-rest-service.service';

describe('PacienteRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacienteRestServiceService = TestBed.get(PacienteRestServiceService);
    expect(service).toBeTruthy();
  });
});
