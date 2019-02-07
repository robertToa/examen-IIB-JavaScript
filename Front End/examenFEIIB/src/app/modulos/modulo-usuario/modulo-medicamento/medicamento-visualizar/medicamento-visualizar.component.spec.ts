import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoVisualizarComponent } from './medicamento-visualizar.component';

describe('MedicamentoVisualizarComponent', () => {
  let component: MedicamentoVisualizarComponent;
  let fixture: ComponentFixture<MedicamentoVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
