import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paciente} from "../../Interfaces/paciente";
import {Medicamento} from "../../Interfaces/medicamento";
import {Evento} from "../../Interfaces/evento";
import {PacienteRestServiceService} from "../../Servicios/paciente-Rest/paciente-rest-service.service";
import {isObject} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-form-medicamento',
  templateUrl: './form-medicamento.component.html',
  styleUrls: ['./form-medicamento.component.scss']
})
export class FormMedicamentoComponent implements OnInit {

  pacientes : Paciente[] =[];
  medicaemento = <Medicamento>{};
  nombreButton: string = " ";
  nombrePaciente: string = "";
  idPacAux:string = "";

  @Input()
  medicamentoAux: Medicamento;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor(
    private readonly _pacienteRest: PacienteRestServiceService
  ) {

  }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.medicamentoAux != null){
      this.medicaemento = JSON.parse(JSON.stringify(this.medicamentoAux));
      if(isObject(this.medicaemento.idPaciente)){
        const paciente :Paciente = <Paciente>this.medicaemento.idPaciente;
        this.medicaemento.idPaciente = paciente.id;
      }
    }
    const pacientes$ = this._pacienteRest.findAll();
    pacientes$.subscribe(
      (pacientes) => this.pacientes = pacientes
    );
  }
  emitirFormulario(){
    this.formularioValido.emit(this.medicaemento);
  }

  agreagrPaciente(){
    this.medicaemento.idPaciente = this.idPacAux;
  }
}
