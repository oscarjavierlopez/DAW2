import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Peliculas {
  constructor() { }

  peliculas = [
      { id: 1, titulo: "Ecos del Pasado", director: "Laura Méndez", anio: 2018, genero: "Drama", disponible: true },
      { id: 2, titulo: "Horizonte de Acero", director: "Carlos Rivas", anio: 2020, genero: "Acción", disponible: false },
      { id: 3, titulo: "Sombras en la Ciudad", director: "Ana Torres", anio: 2016, genero: "Thriller", disponible: true },
      { id: 4, titulo: "El Último Viaje", director: "Miguel Serrano", anio: 2022, genero: "Ciencia Ficción", disponible: true },
      { id: 5, titulo: "Caminos Cruzados", director: "Sofía Delgado", anio: 2019, genero: "Romance", disponible: false },
      { id: 6, titulo: "La Casa del Eco", director: "Javier Montes", anio: 2015, genero: "Terror", disponible: true },
      { id: 7, titulo: "Luz de Invierno", director: "Elena Vargas", anio: 2021, genero: "Drama", disponible: true },
      { id: 8, titulo: "Código Fantasma", director: "Raúl Medina", anio: 2017, genero: "Suspense", disponible: false },
      { id: 9, titulo: "El Guardián del Tiempo", director: "Nuria Campos", anio: 2023, genero: "Aventura", disponible: true },
      { id: 10, titulo: "Voces del Mar", director: "Pablo Herrera", anio: 2014, genero: "Documental", disponible: true },
      { id: 11, titulo: "Noche de Cristal", director: "Lucía Ferrer", anio: 2018, genero: "Fantástico", disponible: false },
      { id: 12, titulo: "Rastro de Cenizas", director: "Diego Álvarez", anio: 2020, genero: "Acción", disponible: true },
      { id: 13, titulo: "El Jardín Olvidado", director: "Marina López", anio: 2013, genero: "Drama", disponible: true },
      { id: 14, titulo: "Cúpula Roja", director: "Héctor Salas", anio: 2021, genero: "Ciencia Ficción", disponible: false },
      { id: 15, titulo: "Amanecer en Ruinas", director: "Isabel Cortés", anio: 2019, genero: "Postapocalíptica", disponible: true }
    ];
}
