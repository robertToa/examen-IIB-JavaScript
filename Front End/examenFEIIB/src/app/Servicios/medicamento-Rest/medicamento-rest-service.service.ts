import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Medicamento} from "../../Interfaces/medicamento";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MedicamentoRestServiceService {

  private nombreModelo: string = "/Medicamento";

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<Medicamento[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Medicamento[]> r));
  }

  delete(id: number | string): Observable<Medicamento> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Medicamento> r));
  }

  create(medicamento:Medicamento): Observable<Medicamento> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, medicamento)
      .pipe(map(r => <Medicamento> r));
  }

  findOneById(id: number | string): Observable<Medicamento> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <Medicamento> r));
  }

  updateOneById(medicamento: Medicamento) {
    const url = environment.url + this.nombreModelo
      + '/' + medicamento.id;
    return this._httpClient
      .put(url, medicamento)
      .pipe(map(r => <Medicamento> r));
  }

}
