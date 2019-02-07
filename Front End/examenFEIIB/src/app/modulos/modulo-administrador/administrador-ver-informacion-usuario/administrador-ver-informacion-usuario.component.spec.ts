import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorVerInformacionUsuarioComponent } from './administrador-ver-informacion-usuario.component';

describe('AdministradorVerInformacionUsuarioComponent', () => {
  let component: AdministradorVerInformacionUsuarioComponent;
  let fixture: ComponentFixture<AdministradorVerInformacionUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorVerInformacionUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorVerInformacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
