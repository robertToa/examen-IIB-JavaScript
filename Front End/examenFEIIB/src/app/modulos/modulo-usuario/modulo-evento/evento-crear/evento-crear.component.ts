import { Component, OnInit } from '@angular/core';
import {Evento} from "../../../../Interfaces/evento";
import {EventoRestServiceService} from "../../../../Servicios/Evento-Rest/evento-rest-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-evento-crear',
  templateUrl: './evento-crear.component.html',
  styleUrls: ['./evento-crear.component.scss']
})
export class EventoCrearComponent implements OnInit {

  constructor(
    private readonly _eventoRest: EventoRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
  }

  crearEvento(evento: Evento){
    const evento$ = this._eventoRest.create(evento);
    evento$.subscribe(
      (even) => this._route.navigate((['/Usuario/gestionEvento'])),
      (error) => alert("Evento no a sido creado, verifique que el evento no exista")
    )
  }
}
