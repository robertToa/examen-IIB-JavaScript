import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoMedicaVisualizarComponent } from './evento-medica-visualizar.component';

describe('EventoMedicaVisualizarComponent', () => {
  let component: EventoMedicaVisualizarComponent;
  let fixture: ComponentFixture<EventoMedicaVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoMedicaVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoMedicaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
