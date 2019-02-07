import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AutenticacionUsuarioServiceService} from "../Servicios/autenticacion/autenticacion-usuario-service.service";
import {isLineBreak} from "codelyzer/angular/sourceMappingVisitor";

@Injectable({
  providedIn: 'root'
})
export class IsAdministradorServiceService
  implements CanActivate
{

  constructor(
    private readonly _autenticacionUsuario: AutenticacionUsuarioServiceService,
    private readonly _route: Router
  ) { }

  canActivate(): boolean {
    if(localStorage.getItem("User")!= 'null'){
      const roles = this._autenticacionUsuario.RolesById(localStorage.getItem("User"));
      roles.subscribe(
        (rol:roles[]) =>
        {
          if(rol.length>0){
            if(rol.find(r=> r.idRol ===1)){
              return true;
            }
            else{
              this._route.navigate((['/login']));
              return false;
            }
          }else{
            this._route.navigate((['/login']));
            return false;
          }
        }
      );
    }else{
      this._route.navigate((['/login']));
      return false;
    }
    return true;
  }
}

interface roles{
  id: number,
  idRol: number,
  idUsuario: number,
}
