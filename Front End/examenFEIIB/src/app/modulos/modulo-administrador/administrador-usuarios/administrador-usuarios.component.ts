import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../Interfaces/usuario";
import {UsuarioRestServiceService} from "../../../Servicios/Servicio-Rest/usuario-rest-service.service";
import {formatNumber} from "@angular/common";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-administrador-usuarios',
  templateUrl: './administrador-usuarios.component.html',
  styleUrls: ['./administrador-usuarios.component.scss']
})
export class AdministradorUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioAux: Usuario[] = [];
  textoBuscar:string = "";
  constructor(
    private readonly _usuarioRestService: UsuarioRestServiceService
  ) { }

  ngOnInit() {
    const usuarios$ = this._usuarioRestService.findAll();
    usuarios$
      .subscribe(
        (u: Usuario[]) => {
          this.usuarios = u;
          this.usuarioAux = u;
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }

  buscarUsuarios(){
    if(this.textoBuscar!="")
      this.usuarios = this.usuarioAux.filter((usuario) => usuario.nombre.indexOf(this.textoBuscar) != -1);
    else
      this.usuarios = JSON.parse(JSON.stringify(this.usuarioAux));
  }

  eliminarUsuario(id:number){
    const indice = this.usuarios.findIndex( u => u.id == id);
    this.usuarios.splice(indice,1);
    const indice1 = this.usuarioAux.findIndex( u => u.id == id);
    this.usuarioAux.splice(indice1,1);
    const  usu = this._usuarioRestService.eliminateUsual(id);
    usu.subscribe(
      (u) => console.log(u)
    );
  }


}
