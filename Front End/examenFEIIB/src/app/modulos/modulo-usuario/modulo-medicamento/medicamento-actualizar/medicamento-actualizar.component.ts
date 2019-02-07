import { Component, OnInit } from '@angular/core';
import {Medicamento} from "../../../../Interfaces/medicamento";
import {ActivatedRoute, Router} from "@angular/router";
import {MedicamentoRestServiceService} from "../../../../Servicios/medicamento-Rest/medicamento-rest-service.service";
import {Evento} from "../../../../Interfaces/evento";

@Component({
  selector: 'app-medicamento-actualizar',
  templateUrl: './medicamento-actualizar.component.html',
  styleUrls: ['./medicamento-actualizar.component.scss']
})
export class MedicamentoActualizarComponent implements OnInit {

  mediActualizar : Medicamento;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _medicamentoRest: MedicamentoRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const evento$ = this._medicamentoRest.findOneById(parametros.idMedico);
          evento$
            .subscribe(
              (medica: Medicamento) => {
                this.mediActualizar = medica;
              }
            );
        }
      );
  }

  actualizarMedicamento(medicamentoAc: Medicamento) {
    if(medicamentoAc.idPaciente==="")
      medicamentoAc.idPaciente = null;
    console.log(medicamentoAc);
    const medicamentoActualizar$ = this._medicamentoRest.updateOneById(medicamentoAc);
    medicamentoActualizar$.subscribe(
      (meedi) => this._route.navigate((['/Usuario/gestionMedico']))
    )
  }
}
