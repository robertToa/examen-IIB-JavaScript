import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Usuario} from "../../Interfaces/usuario";
import {HttpClient} from "@angular/common/http";
import {Evento} from "../../Interfaces/evento";
import {Observable} from "rxjs";
import {Medicamento} from "../../Interfaces/medicamento";
import {EventoMedicamentoInterface} from "../../Interfaces/evento-medicamento-interface";

@Injectable({
  providedIn: 'root'
})
export class EventoRestServiceService {

  nombreModelo:String = '/Evento';

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAllEvento(){
    const eventos$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(e => <Evento[]> e));
    return eventos$;
  }

  findEventoById(id: number | string):Observable<Evento>{
    const eventos$ = this._httpClient
      .get(environment.url + this.nombreModelo + `/${id}` )
      .pipe(map(e => <Evento> e));
    return eventos$;
  }

  findMedicamentByEvento(id: number | string):Observable<EventoMedicamentoInterface[]>{
    const objeto = {
      id: id
    };
    const medicaemntos$ = this._httpClient
      .post(environment.url + "/EventoPorMedicamento/Medicamentos",objeto)
      .pipe(map(e =>  <EventoMedicamentoInterface[]> e));
    return medicaemntos$;
  }

  create(evento:Evento): Observable<Evento> {
    const url = environment.url + '/Evento';
    return this._httpClient
      .post(url, evento)
      .pipe(map(r => <Evento> r)); // Castear
  }

  updateEvento(evento: Evento) {
    const url = environment.url + '/Evento'
      + '/' + evento.id;
    const objeto = {
      nombre: evento.nombre,
      fecha : evento.fecha,
      latitud: evento.latitud,
      longitud: evento.longitud
    }
    return this._httpClient
      .put(url, objeto)
      .pipe(map(r => <Evento> r));
  }
}
