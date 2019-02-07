import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoMedicaAgregarComponent } from './evento-medica-agregar.component';

describe('EventoMedicaAgregarComponent', () => {
  let component: EventoMedicaAgregarComponent;
  let fixture: ComponentFixture<EventoMedicaAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoMedicaAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoMedicaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
