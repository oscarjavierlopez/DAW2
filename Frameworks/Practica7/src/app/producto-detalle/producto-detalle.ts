import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  id = 0;
  producto!: {
    id: number,
    nombre: string,
    precio: number,
    descripcion: string,
    imagen: string,
    categoria: string
  } | undefined;
  productos = [
    {
      id: 1,
      nombre: 'iphone 16',
      precio: 588.99,
      descripcion: `El iPhone 16 redefine lo que un smartphone puede ofrecer, combinando un diseño elegante de aluminio con una parte trasera de vidrio con infusión de color disponible en tonos negro, blanco, rosa, verde azulado y azul ultramar. Su pantalla Super Retina XDR OLED de 6.1" ofrece un brillo espectacular y colores vibrantes para disfrutar de contenido, juegos y fotografía con una nitidez impresionante.
                    Impulsado por el chip A18, el iPhone 16 da un salto en rendimiento y eficiencia, permitiendo ejecutar apps exigentes, juegos de nivel consola y herramientas de edición con fluidez excepcional. Además, su batería optimizada ofrece hasta 22 horas de reproducción de vídeo, ideal para quienes necesitan autonomía durante todo el día.
                    El nuevo Control de Cámara permite acceder rápidamente a funciones clave como zoom, exposición o profundidad de campo, para capturar cada momento con precisión. Su cámara Fusion de 48 Mpx, junto al teleobjetivo de 2 aumentos de calidad óptica y un ultra gran angular mejorado, ofrece fotografías y vídeos con un nivel de detalle sorprendente incluso en condiciones de poca luz.
                    Con Face ID, compatibilidad con MagSafe, USB‑C y iOS 18, el iPhone 16 es un dispositivo preparado para el futuro, seguro y versátil.`,
      imagen: 'assets/images/iphone16.jpg',
      categoria: 'electrónica'
    },
    {
      id: 2,
      nombre: 'pantalón de chandal',
      precio: 55.00,
      descripcion: `Este pantalón de chándal adidas combina comodidad, estilo y rendimiento en una sola prenda. Fabricado con materiales suaves y transpirables, ofrece una sensación ligera ideal para el día a día, entrenamientos o momentos de descanso. Su diseño clásico con las icónicas tres rayas laterales aporta un toque deportivo atemporal que nunca pasa de moda.
                    La cintura elástica con cordón ajustable garantiza un ajuste cómodo y seguro, mientras que los puños en los tobillos proporcionan un look moderno y una mejor sujeción. Incluye bolsillos laterales funcionales para llevar lo esencial de forma práctica.
                    Perfecto para combinar con sudaderas, camisetas o zapatillas deportivas, este pantalón de chándal es una opción versátil para quienes buscan confort sin renunciar al estilo.`,
      imagen: 'assets/images/chandal.jpg',
      categoria: 'ropa'
    },
    {
      id: 3,
      nombre: 'Hamburguesa carnívora',
      precio: 8.99,
      descripcion: `La Hamburguesa Carnívora es una explosión de sabor pensada para quienes disfrutan de la carne en su máximo esplendor. Comienza con 220 gramos de ternera madurada, jugosa y llena de matices, cocinada al punto perfecto para conservar toda su intensidad. Sobre ella se desborda una generosa porción de pulled pork tierno y meloso, que aporta un contraste dulce y ahumado que se funde con cada bocado.
                    El bacon crujiente añade ese toque salado y adictivo que equilibra la mezcla de carnes, mientras que el queso cheddar, derretido lentamente, envuelve el conjunto con una cremosidad irresistible. Para rematar, una salsa barbacoa con miel aporta un equilibrio entre dulzor y ahumado que potencia todos los sabores sin eclipsarlos.
                    Todo esto se sirve en un pan artesanal Juanito Baker, suave por dentro y ligeramente tostado por fuera, capaz de sostener la intensidad de la hamburguesa sin perder su textura.
                    Una combinación contundente, sabrosa y pensada para quienes buscan una experiencia carnívora completa y memorable.`,
      imagen: 'assets/images/hamburguesa.png',
      categoria: 'alimentos'
    }
  ];


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parseInt(parametros.get("id")!);
      this.producto = this.productos.find((producto) => producto.id === this.id);
      console.log(this.producto);
    })
  }
}
