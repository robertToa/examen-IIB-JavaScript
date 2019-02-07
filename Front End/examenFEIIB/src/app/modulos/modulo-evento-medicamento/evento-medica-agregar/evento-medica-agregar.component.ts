import { Component, OnInit } from '@angular/core';
import {Evento} from "../../../Interfaces/evento";
import {Medicamento} from "../../../Interfaces/medicamento";
import {EventoRestServiceService} from "../../../Servicios/Evento-Rest/evento-rest-service.service";
import {MedicamentoRestServiceService} from "../../../Servicios/medicamento-Rest/medicamento-rest-service.service";
import {EventoMedicamentoRestServiceService} from "../../../Servicios/Evento-Medicaemento-Rest/evento-medicamento-rest-service.service";
import {EventoMedicamentoInterface} from "../../../Interfaces/evento-medicamento-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-evento-medica-agregar',
  templateUrl: './evento-medica-agregar.component.html',
  styleUrls: ['./evento-medica-agregar.component.scss']
})
export class EventoMedicaAgregarComponent implements OnInit {

  eventos: Evento[] = [];
  medicaemntos: Medicamento[] = [];
  eventoSeleccionado: string = "";
  medicamentoSeleccionao: string = ""
  constructor(
    private readonly _eventoRest: EventoRestServiceService,
    private readonly _medicamentoRest: MedicamentoRestServiceService,
    private readonly _eventoMediRest: EventoMedicamentoRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
    const eventos$ = this._eventoRest.findAllEvento();
    eventos$.subscribe(
      (e) => this.eventos = e
    );
    const medicaemntos$ = this._medicamentoRest.findAll();
    medicaemntos$.subscribe(
      (m) => this.medicaemntos = m
    );
  }

  agregarEvento(id: number | string){
    this.eventoSeleccionado = <string>id;
  }

  agregarMedicamento(id: number | string){
    this.medicamentoSeleccionao = <string> id;
  }

  crearEventMedicaa(){
    if(this.eventoSeleccionado !="" && this.medicamentoSeleccionao!=""){
      const EventoMedi:EventoMedicamentoInterface = <EventoMedicamentoInterface>{};
      EventoMedi.idEvento = this.eventoSeleccionado;
      EventoMedi.idMedicamento = this.medicamentoSeleccionao;
      const crearEM$ = this._eventoMediRest.create(EventoMedi);
      crearEM$.subscribe(
        (m)=> this._route.navigate((['/Usuario/eventMedica']))
      );
    }else{
      alert("Seleccione el evento y medicamento para agregar");
    }
  }


}
