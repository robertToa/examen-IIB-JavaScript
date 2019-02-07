import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../../Servicios/usuario-service.service";
import {Usuario} from "../../../Interfaces/usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioRestServiceService} from "../../../Servicios/Servicio-Rest/usuario-rest-service.service";

@Component({
  selector: 'app-administrador-actualizar-usuario',
  templateUrl: './administrador-actualizar-usuario.component.html',
  styleUrls: ['./administrador-actualizar-usuario.component.scss']
})
export class AdministradorActualizarUsuarioComponent implements OnInit {

  usuarioActualizar:Usuario;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private  readonly _usuarioSerice: UsuarioRestServiceService
  ) {

  }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros) => {
          const usuario$ = this._usuarioSerice
            .findOneById(parametros.idUsuario);
          usuario$
            .subscribe(
              (usuario: Usuario) => {
                this.usuarioActualizar = usuario;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }

  actualizarUsuario(usuarioActualizado) {
    this.usuarioActualizar.id = usuarioActualizado.id;
    console.log("actualizado usuario");
  }

}
