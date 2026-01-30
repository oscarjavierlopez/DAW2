import { Routes } from '@angular/router';
import { ListaPeliculas } from './lista-peliculas/lista-peliculas';
import { FormularioPelicula } from './formulario-pelicula/formulario-pelicula';

export const routes: Routes = [
    {
        path: '',
        component: ListaPeliculas
    },
    {
        path: 'listapeliculas',
        component: ListaPeliculas
    },
    {
        path: 'formularioPeliculas',
        component: FormularioPelicula
    }
];
