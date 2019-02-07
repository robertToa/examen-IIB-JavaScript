import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {AutenticacionUsuarioServiceService} from "../../../Servicios/autenticacion/autenticacion-usuario-service.service";
import {Usuario} from "../../../Interfaces/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  usuario:Usuario ;
  constructor(
    private readonly _router:Router,
    private readonly _autenticacionUser: AutenticacionUsuarioServiceService
  ) { }

  ngOnInit() {
    if(localStorage.getItem("User") != 'null' ){
      const roles = this._autenticacionUser.RolesById(localStorage.getItem("User"));
      roles.subscribe(
        (rol:roles[]) =>
        {
          if(rol.length>0){
            if(rol.find(r=> r.idRol ===1))
              this._router.navigate((['/Administrador']));
            else
            if(rol.find(r=> r.idRol ===2))
              this._router.navigate((['/Usuario']));
            else
              this._router.navigate((['/Visitante']));
          }else{
            alert("Espere a que el administrador le acepte en algun rol");
            //localStorage.setItem('User', null);
            this._router.navigate((['/Visitante']));
          }
        }
      );
    }
  }

  logearse(formularioLogin){
    const autenticacion$ = this._autenticacionUser.Login(this.username,this.password);
    autenticacion$.subscribe(
      (u:Usuario[]) =>{
        if(u.length>0) {
          this.usuario = u[0];
          localStorage.setItem('User', String(this.usuario.id));
          const roles = this._autenticacionUser.RolesById(this.usuario.id);
          roles.subscribe(
            (rol:roles[]) =>
            {
              if(rol.length>0){
                if(rol.find(r=> r.idRol ===1))
                  this._router.navigate((['/Administrador']));
                else
                  if(rol.find(r=> r.idRol ===2))
                    this._router.navigate((['/Usuario']));
                  else
                    this._router.navigate((['/Visitante']));
              }else{
                alert("Espere a que el administrador le acepte en algun rol");
                //localStorage.setItem('User', null);
                this._router.navigate((['/Visitante']));
              }
            }
          );
        }else{
          alert("error en la contrasena o password");
          localStorage.setItem('User', null);
        }
      },
      (error) => localStorage.setItem('User', null)
    );
  }

}
interface roles{
  id: number | String,
  idRol: number,
  idUsuario: number,
}
