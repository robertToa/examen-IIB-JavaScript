import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoActualizarComponent } from './medicamento-actualizar.component';

describe('MedicamentoActualizarComponent', () => {
  let component: MedicamentoActualizarComponent;
  let fixture: ComponentFixture<MedicamentoActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
