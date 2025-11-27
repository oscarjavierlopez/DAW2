import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuariosRegistrados: string[] = [];
  datos = '';
  formUser = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    biografia: new FormControl(''),
    genero: new FormControl('otro'),
    preferencias: new FormGroup({
      musica: new FormControl(false),
      deportes: new FormControl(false),
      videojuegos: new FormControl(false),
      lectura: new FormControl(false),
      nivelExperiencia: new FormControl('basico')
    })
  })

  constructor(){
    this.usuariosRegistrados = [];
    let usuarios = localStorage.getItem('usuariosRegistrados');
    if(usuarios){
      let arrayUsuarios = JSON.parse(usuarios);
      for(let usuario of arrayUsuarios){
        this.usuariosRegistrados.push(usuario);
      }
    }
  }

  submit() {
    if (this.formUser.value.nombre && this.formUser.value.email && this.formUser.value.biografia
      && this.formUser.value.genero && this.formUser.value.preferencias) {
      this.datos = `
        Nombre: ${this.formUser.value.nombre}-
        email: ${this.formUser.value.email}-
        biografia: ${this.formUser.value.biografia}-
        genero: ${this.formUser.value.genero}-
        nivel de angular: ${this.formUser.value.preferencias.nivelExperiencia}`;
      if (this.formUser.value.preferencias.musica || this.formUser.value.preferencias.deportes
        || this.formUser.value.preferencias.videojuegos || this.formUser.value.preferencias.lectura
      ) {
        this.datos += `
          -Preferencias:
          ${this.formUser.value.preferencias.musica ? 'musica' : ''}
          ${this.formUser.value.preferencias.deportes ? 'deportes' : ''}
          ${this.formUser.value.preferencias.lectura ? 'lectura' : ''}
          ${this.formUser.value.preferencias.videojuegos ? 'videojuegos' : ''}
          `;
      }
      this.usuariosRegistrados.push(this.datos);
      localStorage.setItem('usuariosRegistrados', JSON.stringify(this.usuariosRegistrados));
    } else {
      this.datos = 'Por favor, complete todos los campos';
    }
  }
}
