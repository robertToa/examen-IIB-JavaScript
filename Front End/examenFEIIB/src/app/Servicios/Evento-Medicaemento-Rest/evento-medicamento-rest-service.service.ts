import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Evento} from "../../Interfaces/evento";
import {Observable} from "rxjs";
import {Medicamento} from "../../Interfaces/medicamento";
import {HttpClient} from "@angular/common/http";
import {EventoMedicamentoInterface} from "../../Interfaces/evento-medicamento-interface";

@Injectable({
  providedIn: 'root'
})
export class EventoMedicamentoRestServiceService {

  nombreModelo:String = '/EventoPorMedicamento';

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(){
    const eventos$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(e => <EventoMedicamentoInterface[]> e));
    return eventos$;
  }

  create(evento:EventoMedicamentoInterface): Observable<EventoMedicamentoInterface> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, evento)
      .pipe(map(r => <EventoMedicamentoInterface> r));
  }

  delete(id: number | string): Observable<EventoMedicamentoInterface> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <EventoMedicamentoInterface> r));
  }
}
