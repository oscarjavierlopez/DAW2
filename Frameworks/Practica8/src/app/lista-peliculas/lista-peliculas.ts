import { Component } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';
import { Peliculas } from '../services/peliculas';

@Component({
  selector: 'app-lista-peliculas',
  imports: [],
  templateUrl: './lista-peliculas.html',
  styleUrl: './lista-peliculas.css',
})
export class ListaPeliculas {
  constructor(public peliculasService: Peliculas){
  }
}
