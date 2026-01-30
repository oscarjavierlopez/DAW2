import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Peliculas } from '../services/peliculas';
import { Pelicula } from '../models/pelicula.model';



@Component({
  selector: 'app-formulario-pelicula',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-pelicula.html',
  styleUrl: './formulario-pelicula.css',
})
export class FormularioPelicula {
  constructor(public peliculasService: Peliculas) {
  }

  mensaje = "";

  formularioPelicula = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
    director: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
    anio: new FormControl('', [Validators.min(0)]),
    genero: new FormControl('Drama', [Validators.required]),
    disponible: new FormControl(true)
  });

  submit() {
    if (this.formularioPelicula.valid) {
      let newMovie = {
        id: this.peliculasService.peliculas.length + 1,
        titulo: this.formularioPelicula.value.titulo!,
        director: this.formularioPelicula.value.director!,
        anio: parseInt(this.formularioPelicula.value.anio!),
        genero: this.formularioPelicula.value.genero!,
        disponible: this.formularioPelicula.value.disponible!
      };
      
      this.peliculasService.peliculas.push(newMovie);
      this.mensaje = 'Película añadida correctamente';
    }
  }
}
