import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPeliculas } from "./lista-peliculas/lista-peliculas";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
