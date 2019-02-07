import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoVerMedicamentoComponent } from './evento-ver-medicamento.component';

describe('EventoVerMedicamentoComponent', () => {
  let component: EventoVerMedicamentoComponent;
  let fixture: ComponentFixture<EventoVerMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoVerMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoVerMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
