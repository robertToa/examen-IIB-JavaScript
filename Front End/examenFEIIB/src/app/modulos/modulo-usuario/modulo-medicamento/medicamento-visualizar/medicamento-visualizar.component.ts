import { Component, OnInit } from '@angular/core';
import {Medicamento} from "../../../../Interfaces/medicamento";
import {MedicamentoRestServiceService} from "../../../../Servicios/medicamento-Rest/medicamento-rest-service.service";

@Component({
  selector: 'app-medicamento-visualizar',
  templateUrl: './medicamento-visualizar.component.html',
  styleUrls: ['./medicamento-visualizar.component.scss']
})
export class MedicamentoVisualizarComponent implements OnInit {

  medicamentos: Medicamento[] = [];

  constructor(
    private readonly _medicamentoRest: MedicamentoRestServiceService
  ) { }

  ngOnInit() {
    const medicaemnto$ = this._medicamentoRest.findAll();
    medicaemnto$.subscribe(
      (mediccamentos) => this.medicamentos = mediccamentos
    );
  }

  eliminarMedicamento(id: number|string){
    const eliminarMedicaemnto = this._medicamentoRest.delete(id);
    eliminarMedicaemnto.subscribe(
      (medicemnto) =>
        this.medicamentos.splice(this.medicamentos.findIndex( (m)=> m.id === medicemnto.id),1)
    );
  }

}
