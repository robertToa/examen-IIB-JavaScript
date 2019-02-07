import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Medicamento} from "../../Interfaces/medicamento";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Paciente} from "../../Interfaces/paciente";
import {Usuario} from "../../Interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class PacienteRestServiceService {

  private nombreModelo: string = "/Paciente";
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAll(): Observable<Paciente[]> {
    return  this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Paciente[]> r));
  }

  delete(id: number | string): Observable<Paciente> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Paciente> r));
  }

  create(paciente:Paciente): Observable<Paciente> {
    const url = environment.url + this.nombreModelo;
    return this._httpClient
      .post(url, paciente)
      .pipe(map(r => <Paciente> r));
  }

  findOneById(id: number | string): Observable<Paciente> {
    const url = environment.url + this.nombreModelo
      + '/' + id;
    return this._httpClient
      .get(url)
      .pipe(map(r => <Paciente> r));
  }

  updateOneById(paciente: Paciente) {
    const url = environment.url + this.nombreModelo
      + '/' + paciente.id;
    const objeto = {
    nombres: paciente.nombres,
    apellidos: paciente.apellidos,
    fechaNacimiento: paciente.fechaNacimiento,
    hijos: paciente.hijos,
    tieneSeguro: paciente.tieneSeguro
    }
    return this._httpClient
      .put(url, objeto)
      .pipe(map(r => <Paciente> r));
  }
}
