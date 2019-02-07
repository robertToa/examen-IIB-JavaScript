import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../../Interfaces/usuario";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Rol} from "../../Interfaces/rol";
import {RolUsuarioInterface} from "../../Interfaces/rol-usuario-interface";

@Injectable({
  providedIn: 'root'
})
export class RolRestServiceService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  findAllRoles(): Observable<Rol[]> {
    const usuarios$ = this._httpClient
      .get(environment.url + "/Rol")
      .pipe(map(u => <Rol[]> u));
    return usuarios$;
  }

  findAllRolesById(id: number|string): Observable<RolUsuarioInterface[]> {
    const objeto = {
      id: id
    };
    const usuarios$ = this._httpClient
      .post(environment.url + "/RolesPorUsuario/rolesUsuario",objeto)
      .pipe(map(u => <RolUsuarioInterface[]> u));
    return usuarios$;
  }
}
