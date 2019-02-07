import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-visitante-main',
  templateUrl: './visitante-main.component.html',
  styleUrls: ['./visitante-main.component.scss']
})
export class VisitanteMainComponent implements OnInit {

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
