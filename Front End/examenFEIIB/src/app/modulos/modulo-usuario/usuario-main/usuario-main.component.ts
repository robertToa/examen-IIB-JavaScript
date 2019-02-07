import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.scss']
})
export class UsuarioMainComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  salir(){
    localStorage.setItem('User', null);
    this._router.navigate((['/login']));
  }

}
