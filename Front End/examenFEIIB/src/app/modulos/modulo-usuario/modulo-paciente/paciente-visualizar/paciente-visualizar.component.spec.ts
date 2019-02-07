import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteVisualizarComponent } from './paciente-visualizar.component';

describe('PacienteVisualizarComponent', () => {
  let component: PacienteVisualizarComponent;
  let fixture: ComponentFixture<PacienteVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
