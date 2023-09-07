import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  texto: string = 'Nada';

  usuario: User[] = [
    { id: 1, nombre: 'juanito', password: '1234' },
    { id: 2, nombre: 'Palacios', password: '2345' },
    { id: 3, nombre: 'Rico', password: '1234' },
    { id: 4, nombre: 'Martinez', password: '2222' },
  ];

  constructor(private router: Router) {}

  cambia() {
    console.log(this.texto + ' (' + this.texto.length + ')');
  }

  enviarDato() {
    this.router.navigate(['uno/', this.texto]);
  }
}
