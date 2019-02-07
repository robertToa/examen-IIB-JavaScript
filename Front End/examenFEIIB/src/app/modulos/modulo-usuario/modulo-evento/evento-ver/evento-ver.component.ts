import { Component, OnInit } from '@angular/core';
import {Evento} from "../../../../Interfaces/evento";
import {EventoRestServiceService} from "../../../../Servicios/Evento-Rest/evento-rest-service.service";

@Component({
  selector: 'app-evento-ver',
  templateUrl: './evento-ver.component.html',
  styleUrls: ['./evento-ver.component.scss']
})
export class EventoVerComponent implements OnInit {

  eventos: Evento[] = [];
  constructor(
    private readonly _eventoRest: EventoRestServiceService
  ) { }

  ngOnInit() {
    const eventos$ = this._eventoRest.findAllEvento();
    eventos$.subscribe(
      (eve:Evento[]) => this.eventos = eve
    )
  }
}
