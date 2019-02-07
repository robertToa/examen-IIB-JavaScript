import { Component, OnInit } from '@angular/core';
import {Medicamento} from "../../../../Interfaces/medicamento";
import {MedicamentoRestServiceService} from "../../../../Servicios/medicamento-Rest/medicamento-rest-service.service";
import {Paciente} from "../../../../Interfaces/paciente";
import {PacienteRestServiceService} from "../../../../Servicios/paciente-Rest/paciente-rest-service.service";

@Component({
  selector: 'app-paciente-visualizar',
  templateUrl: './paciente-visualizar.component.html',
  styleUrls: ['./paciente-visualizar.component.scss']
})
export class PacienteVisualizarComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(
    private readonly _pacienteRest: PacienteRestServiceService
  ) { }

  ngOnInit() {
    const pacientes$ = this._pacienteRest.findAll();
    pacientes$.subscribe(
      (pacs) => this.pacientes = pacs
    );
  }

  eliminarPaciente(id: number|string){
    const eliminarPaciente = this._pacienteRest.delete(id);
    eliminarPaciente.subscribe(
      (paciente) =>
        this.pacientes.splice(this.pacientes.findIndex( (m)=> m.id === paciente.id),1),
        (error) => alert("No se pudo eliminar el paciente "+ id)
    );
  }

}
