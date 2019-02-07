import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./modulos/modulo-logeo/login/login.component";
import {RegistarseComponent} from "./modulos/modulo-logeo/registarse/registarse.component";
import {AdministradorUsuariosComponent} from "./modulos/modulo-administrador/administrador-usuarios/administrador-usuarios.component";
import {AdministradorActualizarUsuarioComponent} from "./modulos/modulo-administrador/administrador-actualizar-usuario/administrador-actualizar-usuario.component";
import {AdministradorVerInformacionUsuarioComponent} from "./modulos/modulo-administrador/administrador-ver-informacion-usuario/administrador-ver-informacion-usuario.component";
import {IsAdministradorServiceService} from "./guards/is-administrador-service.service";
import {AdministradorMainComponent} from "./modulos/modulo-administrador/administrador-main/administrador-main.component";
import {UsuarioMainComponent} from "./modulos/modulo-usuario/usuario-main/usuario-main.component";
import {NoencontradoMainComponent} from "./modulos/modulo-404/noencontrado-main/noencontrado-main.component";
import {IsUsuarioServiceService} from "./guards/is-usuario-service.service";
import {EventoVisualizarComponent} from "./modulos/modulo-todos/evento-visualizar/evento-visualizar.component";
import {EventoVerMedicamentoComponent} from "./modulos/modulo-todos/evento-ver-medicamento/evento-ver-medicamento.component";
import {PacienteCrearComponent} from "./modulos/modulo-usuario/modulo-paciente/paciente-crear/paciente-crear.component";
import {PacienteVisualizarComponent} from "./modulos/modulo-usuario/modulo-paciente/paciente-visualizar/paciente-visualizar.component";
import {PacienteActualizarComponent} from "./modulos/modulo-usuario/modulo-paciente/paciente-actualizar/paciente-actualizar.component";
import {MedicamentoVisualizarComponent} from "./modulos/modulo-usuario/modulo-medicamento/medicamento-visualizar/medicamento-visualizar.component";
import {MedicamentoCrearComponent} from "./modulos/modulo-usuario/modulo-medicamento/medicamento-crear/medicamento-crear.component";
import {MedicamentoActualizarComponent} from "./modulos/modulo-usuario/modulo-medicamento/medicamento-actualizar/medicamento-actualizar.component";
import {EventoCrearComponent} from "./modulos/modulo-usuario/modulo-evento/evento-crear/evento-crear.component";
import {EventoActualizarComponent} from "./modulos/modulo-usuario/modulo-evento/evento-actualizar/evento-actualizar.component";
import {EventoVerComponent} from "./modulos/modulo-usuario/modulo-evento/evento-ver/evento-ver.component";
import {VisitanteMainComponent} from "./modulos/modulo-visitante/visitante-main/visitante-main.component";
import {EventoMedicamentoMainComponent} from "./modulos/modulo-evento-medicamento/evento-medicamento-main/evento-medicamento-main.component";
import {EventoMedicaVisualizarComponent} from "./modulos/modulo-evento-medicamento/evento-medica-visualizar/evento-medica-visualizar.component";
import {EventoMedicaAgregarComponent} from "./modulos/modulo-evento-medicamento/evento-medica-agregar/evento-medica-agregar.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegistarseComponent
  },
  {
    path: 'Administrador',
    component: AdministradorMainComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Usuarios'
      },
      {
        path: 'Usuarios',
        component: AdministradorUsuariosComponent,
        canActivate: [
          IsAdministradorServiceService
        ]
      },
      {
        path: 'actualizarUsuario/:idUsuario',
        component: AdministradorActualizarUsuarioComponent,
        canActivate: [
          IsAdministradorServiceService
        ]
      },
      {
        path: 'VerInformacionUsuario/:idUsuario',
        component: AdministradorVerInformacionUsuarioComponent,
        canActivate: [
          IsAdministradorServiceService
        ]
      },
      {
        path: 'Eventos',
        component: EventoVisualizarComponent,
        children: [
          {
            path: 'Medicamentos/:idEvento',
            component: EventoVerMedicamentoComponent
          }
        ]
      }
    ]
  },
  {
    path: 'Usuario',
    component: UsuarioMainComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestionPaciente',
      },
      {
        path: 'gestionPaciente',
        component: PacienteVisualizarComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'crearPaciente',
        component: PacienteCrearComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'actualizarPaciente/:idPaciente',
        component: PacienteActualizarComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'gestionMedico',
        component: MedicamentoVisualizarComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'crearMedicamento',
        component: MedicamentoCrearComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'actualizarMedicamento/:idMedico',
        component: MedicamentoActualizarComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'gestionEvento',
        component: EventoVerComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'actualizarEvento/:idEvento',
        component:EventoActualizarComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'crearEvento',
        component: EventoCrearComponent,
        canActivate: [
          IsUsuarioServiceService
        ]
      },
      {
        path: 'Eventos',
        component: EventoVisualizarComponent,
        children: [
          {
            path: 'Medicamentos/:idEvento',
            component: EventoVerMedicamentoComponent
          }
        ]
      },
      {
        path: 'eventMedica',
        component: EventoMedicamentoMainComponent,
        canActivate: [
          IsUsuarioServiceService
        ],
        children:[
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'EventoMedicamento'
          },
          {
            path: 'EventoMedicamento',
            component: EventoMedicaVisualizarComponent
          },
          {
            path: 'AgregarEventoMedicamento',
            component: EventoMedicaAgregarComponent
          }
        ]
      }
    ]
  },
  {
    path: 'Visitante',
    component: VisitanteMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Eventos'
      },
      {
        path: 'Eventos',
        component: EventoVisualizarComponent,
        children: [
          {
            path: 'Medicamentos/:idEvento',
            component: EventoVerMedicamentoComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: NoencontradoMainComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
