import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variable = "Hola, esto es un texto";
  nombre:string = "Bastian";

  cambiarNombre() {
    this.nombre = "Braulio";
  }
}
