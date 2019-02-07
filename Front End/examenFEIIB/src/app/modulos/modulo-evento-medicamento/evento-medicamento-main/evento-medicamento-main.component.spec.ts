import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoMedicamentoMainComponent } from './evento-medicamento-main.component';

describe('EventoMedicamentoMainComponent', () => {
  let component: EventoMedicamentoMainComponent;
  let fixture: ComponentFixture<EventoMedicamentoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoMedicamentoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoMedicamentoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
