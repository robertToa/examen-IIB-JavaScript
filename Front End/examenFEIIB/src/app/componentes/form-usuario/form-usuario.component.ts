import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  usuario= <Usuario>{};
  nombreButton :String = "";

  @Input()
  UsuarioAux: Usuario;

  @Input()
  nombreButtonAux: String;

  @Output()
  formularioValido = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //console.log(this.UsuarioAux);
    console.log(this.UsuarioAux);
    this.usuario = this.UsuarioAux;
    if(this.nombreButtonAux === "")
      this.nombreButton = "Crear";
    else
      this.nombreButton = this.nombreButtonAux;
  }

  emitirFormulario(){
    this.formularioValido.emit(this.usuario);
  }
}
