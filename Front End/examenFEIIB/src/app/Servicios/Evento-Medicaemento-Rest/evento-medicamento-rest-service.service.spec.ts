import { TestBed } from '@angular/core/testing';

import { EventoMedicamentoRestServiceService } from './evento-medicamento-rest-service.service';

describe('EventoMedicamentoRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoMedicamentoRestServiceService = TestBed.get(EventoMedicamentoRestServiceService);
    expect(service).toBeTruthy();
  });
});
