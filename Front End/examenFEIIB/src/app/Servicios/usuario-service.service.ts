import { Injectable } from '@angular/core';
import {UsuarioRestServiceService} from "./Servicio-Rest/usuario-rest-service.service";
import {Usuario} from "../Interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuarios: Usuario[] = [];
  constructor(private readonly _usuarioRestService: UsuarioRestServiceService)
  {  }

  findUsuarios(){
    const usuarios$ = this._usuarioRestService.findAll();
     usuarios$
      .subscribe(
        (u: Usuario[]) => {
          this.usuarios = u;
        },
        (error) => {
          console.error('Error', error);
        }
      );
     console.log(this.usuarios);
  }

}
