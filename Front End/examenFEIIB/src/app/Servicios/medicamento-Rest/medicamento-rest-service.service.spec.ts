import { TestBed } from '@angular/core/testing';

import { MedicamentoRestServiceService } from './medicamento-rest-service.service';

describe('MedicamentoRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicamentoRestServiceService = TestBed.get(MedicamentoRestServiceService);
    expect(service).toBeTruthy();
  });
});
