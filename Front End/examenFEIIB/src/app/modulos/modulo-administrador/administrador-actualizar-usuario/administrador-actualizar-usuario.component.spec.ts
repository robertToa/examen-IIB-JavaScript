import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorActualizarUsuarioComponent } from './administrador-actualizar-usuario.component';

describe('AdministradorActualizarUsuarioComponent', () => {
  let component: AdministradorActualizarUsuarioComponent;
  let fixture: ComponentFixture<AdministradorActualizarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorActualizarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorActualizarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
