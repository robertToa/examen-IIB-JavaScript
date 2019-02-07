import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPacienteComponent } from './form-paciente.component';

describe('FormPacienteComponent', () => {
  let component: FormPacienteComponent;
  let fixture: ComponentFixture<FormPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
