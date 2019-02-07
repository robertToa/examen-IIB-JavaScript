import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrador-main',
  templateUrl: './administrador-main.component.html',
  styleUrls: ['./administrador-main.component.scss']
})
export class AdministradorMainComponent implements OnInit {

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
