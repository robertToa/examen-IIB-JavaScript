import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../../../Interfaces/paciente";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteRestServiceService} from "../../../../Servicios/paciente-Rest/paciente-rest-service.service";
import {Evento} from "../../../../Interfaces/evento";

@Component({
  selector: 'app-paciente-actualizar',
  templateUrl: './paciente-actualizar.component.html',
  styleUrls: ['./paciente-actualizar.component.scss']
})
export class PacienteActualizarComponent implements OnInit {
  pacienteActualizar: Paciente;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _pacienteRest: PacienteRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const paciente$ = this._pacienteRest.findOneById(parametros.idPaciente);
          paciente$.subscribe(
              (pac: Paciente) => {
                this.pacienteActualizar = pac;
              }
            );
        }
      );
  }


  actualizarPaciente(pacienteAc:Paciente) {
    const evento$ = this._pacienteRest.updateOneById(pacienteAc);
    evento$.subscribe(
      (evet) => this._route.navigate((['/Usuario/gestionPaciente'])),
      (error) => alert("Paciente no actualizado")
    )
  }

}
