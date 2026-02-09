<!DOCTYPE html>
<html lang="en">
{{-- Fichero plantilla.blade.php desarrollado por Óscar Javier López Gómez.
 Muestra contenido estático que siempre será visible --}}

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Proyecto2</title>
    @stack('styles')
    <style>
        body {
            margin: 0;
            padding: 0;
            ;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #000;
            color: white;
            gap: 10px;

            input{
                border: none;
                background-color: #000;
                color: white;
            }

            input:hover{
                font-weight: bold;
            }
        }

        nav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            a {
                text-decoration: none;
                color: #000;
            }

            a:hover {
                font-weight: bold;
            }
        }

        footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #000;
            color: white;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-family: Arial, sans-serif;
        }

        thead {
            background-color: #000;
            color: #fff;
            font-weight: bold;
        }

        thead th {
            padding: 10px;
            border: 1px solid #333;
        }

        tbody td {
            padding: 10px;
            color: #000;
            border: 1px solid #ccc;
            background-color: #fff;
        }

        .botones{
            text-decoration: none;
            background-color: #b2a4a4;
            color: black;
            border: 2px solid black;
            padding: 6px 12px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
        }

        .botones:hover{
            opacity: 0.8;
        }
    </style>
</head>

<body>
    <header>
        <h1>Usuario: {{ session('email') }}</h1>
        <form action="{{ route('logout') }}" method="POST">
            @csrf
            <input type="submit" value="Cerrar sesión">
        </form>
    </header>
    <nav>
        <a href="{{ route('inicio') }}">inicio</a>
        <a href="{{ route('clientes') }}">clientes</a>
        <a href="{{ route('servicios') }}">servicios</a>
        <a href="{{ route('citas') }}">citas</a>
    </nav>

    @yield('apartado')

    <footer><span>&copy; 2025 Citas</span> <span>Óscar Javier López Gómez</span></footer>
</body>

</html>
