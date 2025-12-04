# Juego de hundir la flota

## Descripción: 
Este proyecto es una versión digital del clásico juego "Hundir la flota". El jugador debe descubrir las 16 casillas que contienen barcos antes de quedarse sin intentos.

## Requisitos:
* Navegador web moderno(Chrome, Firefox, Edge…)
* Tener instalado XAMPP en local.

## Cómo ejecutar:
1. Inicia apache en localhost y busca localhost/PROYECTO02 en el navegador.
2. Introduce el nº de intentos(opcional) entre 1 y 100. Si no lo haces o incluyes un número no válido serán 40 por defecto.
3. Incluye un fichero .txt con las posiciones de los barcos(opcional). Si no lo incluyes se generarán posiciones aleatorias y si lo incluyes asegurate de que no se repita ninguna coordenada. En cada línea del fichero deberás introducir las posiciones de las 4 casillas que ocupa cada barco separadas por espacios.
Ejemplo: 66 67 68 69
4. Introduce un tiempo de juego(opcional). Si no lo haces dispodrás del tiempo que quieras para completar la partida.
5. Pulsa el botón de empezar para iniciar la partida.

## Flujo del juego:
1. Inicio
    * Se solicita el número de intentos.
    * Se solicita un fichero con las posiciones de los barcos.
    * Se solicita el tiempo de juego en segundos.
    * Al pulsar "empezar" nos lleva a la página del tablero
2. Pantalla de juego:
    * A la izquierda: tablero con botones para disparar.
    * A la derecha: Panel informativo con:
        * nº de intentos restantes.
        * Casillas a hundir.
        * casillas hundidas.
        * Tiempo restante(sólo si se introdujo en la página de inicio).
3. Disparos:
    * Al pulsar una casilla, la misma se dará la vuelta y mostrará:
        * Azul: disparo fallido(agua)
        * Rojo: Disparo acertado(tocado)
    * En el panel informativo se actualizarán los contadores:
        * el número de intentos se reducirá.
        * Si ha habido acierto:
            * el contador de "hundidos" aumentará.
            * el contador de "a hundir" se reducirá.
4. Fin de la partida:
    * El juego termina cuando:
        * Se agotan los intentos o el tiempo: Has perdido
        * Se hunden las 16 casillas: Has ganado
5. Reinicio:
    * Al pulsar el botón de "Reset" se cerrará la sesión en la que está almacenado el estado del tablero y se vuelve a la pantalla de inicio.

## Capturas:
Aquí se muestran ejemplos visuales del juego en distintas etapas:
![Formulario de inicio](/capturas/inicio.png)
![Estado inicial del tablero](/capturas/tableroInicial.png)
![Estado del tablero durante el juego](/capturas/tableroJuego.png)
![Estado del tablero durante el juego con tiempo](/capturas/tableroTiempo.png)
![Victoria](/capturas/FinJuego-victoria.png)
![derrota](/capturas/FinJuego-derrota.png)





        