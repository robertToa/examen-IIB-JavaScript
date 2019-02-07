import { Component, OnInit } from '@angular/core';
import {Medicamento} from "../../../../Interfaces/medicamento";
import {MedicamentoRestServiceService} from "../../../../Servicios/medicamento-Rest/medicamento-rest-service.service";
import {Router} from "@angular/router";

// noinspection JSAnnotator
@Component({
  selector: 'app-medicamento-crear',
  templateUrl: './medicamento-crear.component.html',
  styleUrls: ['./medicamento-crear.component.scss']
})
export class MedicamentoCrearComponent implements OnInit {

  constructor(
    private readonly _mediRest: MedicamentoRestServiceService,
    private readonly _router: Router
  ) { }

  ngOnInit(
  ) {

  }

  crearMedicamento(medicamento:Medicamento){
    console.log(medicamento);
    const crearMedicamento$ = this._mediRest.create(medicamento);
    crearMedicamento$.subscribe(
      (medicaemnto)=> this._router.navigate((['/Usuario/gestionMedico']))
    );

  }

}
