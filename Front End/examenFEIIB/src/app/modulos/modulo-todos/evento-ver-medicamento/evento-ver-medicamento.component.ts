import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventoRestServiceService} from "../../../Servicios/Evento-Rest/evento-rest-service.service";
import {Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";
import {Medicamento} from "../../../Interfaces/medicamento";
import {Evento} from "../../../Interfaces/evento";

@Component({
  selector: 'app-evento-ver-medicamento',
  templateUrl: './evento-ver-medicamento.component.html',
  styleUrls: ['./evento-ver-medicamento.component.scss']
})
export class EventoVerMedicamentoComponent implements OnInit {

  medicamentos: Medicamento[] = [];
  nombreEvento:string = "";
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _eventoRest: EventoRestServiceService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const medicamento$ = this._eventoRest.findMedicamentByEvento(parametros.idEvento);
          const evento$ =  this._eventoRest.findEventoById(parametros.idEvento);
          evento$.subscribe(
            (eve) => this.nombreEvento = eve.nombre
          );
          const med = medicamento$
            .pipe(
              map(m => m.map(med => med.idMedicamento))
            );
          med.subscribe(
            (m:Medicamento[]) => {
              if(!(m.length>0))
                alert("No existe medicamentos");
              this.medicamentos = m
            }
          )
        }
      );


  }

}
