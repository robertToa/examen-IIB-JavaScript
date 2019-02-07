import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/modulo-logeo/login/login.component';
import { RegistarseComponent } from './modulos/modulo-logeo/registarse/registarse.component';
import {FormsModule} from "@angular/forms";
import { AdministradorUsuariosComponent } from './modulos/modulo-administrador/administrador-usuarios/administrador-usuarios.component';
import { AdministradorVerInformacionUsuarioComponent } from './modulos/modulo-administrador/administrador-ver-informacion-usuario/administrador-ver-informacion-usuario.component';
import { AdministradorActualizarUsuarioComponent } from './modulos/modulo-administrador/administrador-actualizar-usuario/administrador-actualizar-usuario.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioRestServiceService} from "./Servicios/Servicio-Rest/usuario-rest-service.service";
import {UsuarioServiceService} from "./Servicios/usuario-service.service";
import { FormUsuarioComponent } from './componentes/form-usuario/form-usuario.component';
import {AutenticacionUsuarioServiceService} from "./Servicios/autenticacion/autenticacion-usuario-service.service";
import {IsAdministradorServiceService} from "./guards/is-administrador-service.service";
import { UsuarioMainComponent } from './modulos/modulo-usuario/usuario-main/usuario-main.component';
import { AdministradorMainComponent } from './modulos/modulo-administrador/administrador-main/administrador-main.component';
import { NoencontradoMainComponent } from './modulos/modulo-404/noencontrado-main/noencontrado-main.component';
import {IsUsuarioServiceService} from "./guards/is-usuario-service.service";
import { EventoVisualizarComponent } from './modulos/modulo-todos/evento-visualizar/evento-visualizar.component';
import { EventoVerMedicamentoComponent } from './modulos/modulo-todos/evento-ver-medicamento/evento-ver-medicamento.component';
import {EventoRestServiceService} from "./Servicios/Evento-Rest/evento-rest-service.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { ListaMedicamentosComponent } from './componentes/lista-medicamentos/lista-medicamentos.component';
import {CardModule} from "primeng/card";
import { RolRestServiceComponent } from './Servicios/rol-Rest/rol-rest-service/rol-rest-service.component';
import { EventoCrearComponent } from './modulos/modulo-usuario/modulo-evento/evento-crear/evento-crear.component';
import { EventoActualizarComponent } from './modulos/modulo-usuario/modulo-evento/evento-actualizar/evento-actualizar.component';
import { MedicamentoVisualizarComponent } from './modulos/modulo-usuario/modulo-medicamento/medicamento-visualizar/medicamento-visualizar.component';
import { MedicamentoCrearComponent } from './modulos/modulo-usuario/modulo-medicamento/medicamento-crear/medicamento-crear.component';
import { MedicamentoActualizarComponent } from './modulos/modulo-usuario/modulo-medicamento/medicamento-actualizar/medicamento-actualizar.component';
import { PacienteVisualizarComponent } from './modulos/modulo-usuario/modulo-paciente/paciente-visualizar/paciente-visualizar.component';
import { PacienteCrearComponent } from './modulos/modulo-usuario/modulo-paciente/paciente-crear/paciente-crear.component';
import { PacienteActualizarComponent } from './modulos/modulo-usuario/modulo-paciente/paciente-actualizar/paciente-actualizar.component';
import { EventoVerComponent } from './modulos/modulo-usuario/modulo-evento/evento-ver/evento-ver.component';
import { FormPacienteComponent } from './componentes/form-paciente/form-paciente.component';
import { FormMedicamentoComponent } from './componentes/form-medicamento/form-medicamento.component';
import { FormEventoComponent } from './componentes/form-evento/form-evento.component';
import {PacienteRestServiceService} from "./Servicios/paciente-Rest/paciente-rest-service.service";
import {MedicamentoRestServiceService} from "./Servicios/medicamento-Rest/medicamento-rest-service.service";
import { VisitanteMainComponent } from './modulos/modulo-visitante/visitante-main/visitante-main.component';
import { EventoMedicamentoMainComponent } from './modulos/modulo-evento-medicamento/evento-medicamento-main/evento-medicamento-main.component';
import { EventoMedicaVisualizarComponent } from './modulos/modulo-evento-medicamento/evento-medica-visualizar/evento-medica-visualizar.component';
import { EventoMedicaAgregarComponent } from './modulos/modulo-evento-medicamento/evento-medica-agregar/evento-medica-agregar.component';
import {EventoMedicamentoRestServiceService} from "./Servicios/Evento-Medicaemento-Rest/evento-medicamento-rest-service.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistarseComponent,
    AdministradorUsuariosComponent,
    AdministradorVerInformacionUsuarioComponent,
    AdministradorActualizarUsuarioComponent,
    FormUsuarioComponent,
    UsuarioMainComponent,
    AdministradorMainComponent,
    NoencontradoMainComponent,
    EventoVisualizarComponent,
    EventoVerMedicamentoComponent,
    ListaMedicamentosComponent,
    RolRestServiceComponent,
    EventoCrearComponent,
    EventoActualizarComponent,
    MedicamentoVisualizarComponent,
    MedicamentoCrearComponent,
    MedicamentoActualizarComponent,
    PacienteVisualizarComponent,
    PacienteCrearComponent,
    PacienteActualizarComponent,
    EventoVerComponent,
    FormPacienteComponent,
    FormMedicamentoComponent,
    FormEventoComponent,
    VisitanteMainComponent,
    EventoMedicamentoMainComponent,
    EventoMedicaVisualizarComponent,
    EventoMedicaAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    CardModule
  ],
  providers: [
    UsuarioRestServiceService,
    UsuarioServiceService,
    AutenticacionUsuarioServiceService,
    IsAdministradorServiceService,
    IsUsuarioServiceService,
    EventoRestServiceService,
    PacienteRestServiceService,
    MedicamentoRestServiceService,
    EventoMedicamentoRestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
