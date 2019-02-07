import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoCrearComponent } from './medicamento-crear.component';

describe('MedicamentoCrearComponent', () => {
  let component: MedicamentoCrearComponent;
  let fixture: ComponentFixture<MedicamentoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
