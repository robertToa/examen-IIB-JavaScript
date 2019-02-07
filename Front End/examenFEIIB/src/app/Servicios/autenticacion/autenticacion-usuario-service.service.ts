import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Usuario} from "../../Interfaces/usuario";
import {environment} from "../../../environments/environment";
import {map, mergeMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UsuarioRestServiceService} from "../Servicio-Rest/usuario-rest-service.service";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionUsuarioServiceService {

  nombreModelo="/Usuario/login"
  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  Login(username: String , pass: String):Observable<Usuario[]>{
    const Objeto ={
      nombre: username,
      password: pass
    }
    const usuarios$ = this._httpClient
      .post(environment.url + this.nombreModelo,Objeto)
      .pipe(map(u => <Usuario[]> u));
    return usuarios$;
  }

  LoginByID(id: String | number) :Observable<Usuario>{
    const usuarios$ = this._httpClient
      .get(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(u => <Usuario> u));
    return usuarios$;
  }

  RolesById(id: String | number):Observable<roles[]>{
    const objeto ={
      id: id
    };
    const roles$ = this._httpClient
      .post(environment.url+"/RolesPorUsuario/rolesUsuarioById",objeto)
      .pipe(map((u:roles[])   => u ));
    return roles$;
  }

  IsUsuarioById(id: String | number):Observable<Usuario>{
    const usuarios$ = this._httpClient
      .get(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(u => <Usuario> u));
    return usuarios$;
  }

  SinLogeo(){

  }



}
interface roles{
  id: number | String,
  idRol: number,
  idUsuario: number,
}
