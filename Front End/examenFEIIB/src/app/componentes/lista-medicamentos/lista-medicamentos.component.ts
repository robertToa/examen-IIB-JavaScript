import {Component, Input, OnInit} from '@angular/core';
import {Medicamento} from "../../Interfaces/medicamento";

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrls: ['./lista-medicamentos.component.scss']
})
export class ListaMedicamentosComponent implements OnInit {

  medicamento = <Medicamento>{}
  constructor() { }

  @Input()
  medicamentoAux: Medicamento

  ngOnInit() {
    this.medicamento = JSON.parse(JSON.stringify(this.medicamentoAux));
  }

}
