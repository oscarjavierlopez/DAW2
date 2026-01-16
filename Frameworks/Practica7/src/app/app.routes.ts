import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { Contacto } from './contacto/contacto';
import { AcercaDe } from './acerca-de/acerca-de';
import { Pagina404 } from './pagina404/pagina404';
import { ProductoDetalle } from './producto-detalle/producto-detalle';
import { Electronica } from './productos/electronica/electronica';
import { Ropa } from './productos/ropa/ropa';
import { Alimentos } from './productos/alimentos/alimentos';

export const routes: Routes = [
    {
        path: '',
        component: Inicio
    },
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: 'productos',
        component: Productos,
        children: [
            {
                path: 'electronica',
                component: Electronica
            },
            {
                path: 'ropa',
                component: Ropa
            },
            {
                path: 'alimentos',
                component: Alimentos
            }
        ]
    },
    {
        path: 'contacto',
        component: Contacto
    },
    {
        path: 'productos/:id',
        component: ProductoDetalle
    },
    {
        path: 'acercaDe',
        component: AcercaDe
    },
    {
        path: 'pagina404',
        component: Pagina404
    },
    {
        path: '**',
        redirectTo: 'pagina404'
    }
];
