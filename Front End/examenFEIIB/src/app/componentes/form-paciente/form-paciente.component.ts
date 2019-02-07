import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evento} from "../../Interfaces/evento";
import {Paciente} from "../../Interfaces/paciente";

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss']
})
export class FormPacienteComponent implements OnInit {

  paciente = <Paciente>{};
  nombreButton: string = " ";

  @Input()
  pacienteAux: Paciente;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.pacienteAux != null)
      this.paciente = JSON.parse(JSON.stringify(this.pacienteAux));
  }

  emitirFormulario(){
    this.formularioValido.emit(this.paciente);
  }

}
