import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Paciente} from "../../../../Interfaces/paciente";
import {PacienteRestServiceService} from "../../../../Servicios/paciente-Rest/paciente-rest-service.service";

@Component({
  selector: 'app-paciente-crear',
  templateUrl: './paciente-crear.component.html',
  styleUrls: ['./paciente-crear.component.scss']
})
export class PacienteCrearComponent implements OnInit {

  constructor(
    private readonly _pacienteRest: PacienteRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
  }

  crearPaciente(paciente: Paciente){
    const evento$ = this._pacienteRest.create(paciente);
    evento$.subscribe(
      (even) => this._route.navigate((['/Usuario/gestionPaciente'])),
      (error) => alert("No se a podido crear el paciente")
    )
  }
}
