import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../Interfaces/usuario";
import {UsuarioRestServiceService} from "../../../Servicios/Servicio-Rest/usuario-rest-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registarse',
  templateUrl: './registarse.component.html',
  styleUrls: ['./registarse.component.scss']
})
export class RegistarseComponent implements OnInit {

  usuario: Usuario =<Usuario>{};
  constructor(
    private readonly _usuarioRest: UsuarioRestServiceService,
    private readonly _route: Router
  ) { }

  ngOnInit() {
  }

  registarse(){
    const usuario$ = this._usuarioRest.create(this.usuario);
    usuario$.subscribe(
      (user) => this._route.navigate((['login'])),
      (error)=> alert("No se pudo registar el usuario 'Pruebe con otro nombre'")
    )
  }


}
