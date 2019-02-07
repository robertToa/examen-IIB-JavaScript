import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../Interfaces/usuario";
import {Rol} from "../../../Interfaces/rol";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Medicamento} from "../../../Interfaces/medicamento";
import {map} from "rxjs/operators";
import {UsuarioRestServiceService} from "../../../Servicios/Servicio-Rest/usuario-rest-service.service";
import {RolRestServiceService} from "../../../Servicios/rol-Rest/rol-rest-service.service";
import {RolUsuarioInterface} from "../../../Interfaces/rol-usuario-interface";

@Component({
  selector: 'app-administrador-ver-informacion-usuario',
  templateUrl: './administrador-ver-informacion-usuario.component.html',
  styleUrls: ['./administrador-ver-informacion-usuario.component.scss']
})
export class AdministradorVerInformacionUsuarioComponent implements OnInit {

  usuario:Usuario = <Usuario>{};
  rolSe:String = "";
  rolesUsuario:Rol[] = [];
  listRoles: Rol[] = [];
  rolesUsuarioAux:RolUsuarioInterface[] = [];
  constructor(
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _usuarioRest: UsuarioRestServiceService,
    private readonly _rolrest: RolRestServiceService
  ) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros) => {
          const usuario$ = this._usuarioRest.findOneById(parametros.idUsuario);
          const roles$ = this._rolrest.findAllRoles();
          const rolesUsuario$ = this._rolrest.findAllRolesById(parametros.idUsuario);
          const rolesUser$ = rolesUsuario$.pipe(
            map(r => r.map( r1 => r1.idRol))
          );

          rolesUsuario$.subscribe(
            (roles:RolUsuarioInterface[]) => this.rolesUsuarioAux = roles
          );

          rolesUser$.subscribe(
            (rol:Rol[]) => this.rolesUsuario = rol
          );

          roles$.subscribe(
            (r:Rol[])=> this.listRoles = r
          );

          usuario$.subscribe(
            (usuario: Usuario) => this.usuario = usuario
          );

        }
      );
  }

  eliminar(id: number | string){
    const rol:number =  this.rolesUsuario.findIndex( (rol) => rol.id == id);
    this._usuarioRest.eliminarrolid(this.rolesUsuarioAux[rol].id);
    this.rolesUsuario.splice(rol,1);
    this.rolesUsuarioAux.splice(rol,1);
  }

  ejecutar(){
    if(this.rolSe != ""){
      if(this.rolesUsuario.length > 0){
        if(this.rolesUsuario.find(rol => rol.nombre === this.rolSe)){
          alert("ERROR ESE USUARIO YA TIENE ESE ROL");
        }else{
          const nueRol$ = this._usuarioRest.agregarRolUser(this.listRoles.find((rol) => rol.nombre === this.rolSe).id,this.usuario.id);
          nueRol$.subscribe(
            (r:RolUsuarioInterface) => {
              this.rolesUsuarioAux.push(r)
              this.rolesUsuario.push(
                <Rol>(r.idRol)
              );
            }
          );
          //console.log(this.listRoles.find((rol) => rol.nombre === this.rolSe).id +" "+this.usuario.id);
        }
      }else{
        const nueRol$ = this._usuarioRest.agregarRolUser(this.listRoles.find((rol) => rol.nombre === this.rolSe).id,this.usuario.id);
        nueRol$.subscribe(
          (r:RolUsuarioInterface) => {
            this.rolesUsuarioAux.push(r)
            this.rolesUsuario.push(
              <Rol>(r.idRol)
            );
          }
        );
      }
    }else
      alert("ERROR ESE USUARIO YA TIENE ESE ROL");
  }


}
