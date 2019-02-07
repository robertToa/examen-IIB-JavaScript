import { Component, OnInit } from '@angular/core';
import {EventoMedicamentoInterface} from "../../../Interfaces/evento-medicamento-interface";
import {EventoMedicamentoRestServiceService} from "../../../Servicios/Evento-Medicaemento-Rest/evento-medicamento-rest-service.service";

@Component({
  selector: 'app-evento-medica-visualizar',
  templateUrl: './evento-medica-visualizar.component.html',
  styleUrls: ['./evento-medica-visualizar.component.scss']
})
export class EventoMedicaVisualizarComponent implements OnInit {

  eventosMedicaemntos: EventoMedicamentoInterface[] = [];
  constructor(private readonly _eventoMedicamentoRest: EventoMedicamentoRestServiceService) { }

  ngOnInit(
  ) {
    const eventMedi$ = this._eventoMedicamentoRest.findAll();
    eventMedi$.subscribe(
      (m) => this.eventosMedicaemntos = m
    );

  }
  eliminar(id: number |string){
    const elimiknarEM$ = this._eventoMedicamentoRest.delete(id);
    elimiknarEM$.subscribe(
      (me:EventoMedicamentoInterface) =>
        this.eventosMedicaemntos.splice(this.eventosMedicaemntos.findIndex( (m)=> m.id === me.id),1)
    );
  }

}
