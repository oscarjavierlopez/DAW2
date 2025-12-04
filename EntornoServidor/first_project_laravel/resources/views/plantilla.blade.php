<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Seccion</title>
    <style>
        nav{
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        a{
            width: 100px;
            color: black;
            text-decoration: none;
            padding: 5px;
            border: 2px solid black;
            text-align: center;
        }

        a:hover{
                background-color: #e2e8f0
            }
    </style>
</head>
<body>
    <!--Contenido estatico -->
    <nav>
        <a href="{{route('blog')}}">Blog</a>
        <a href="{{route('fotos')}}">Fotos</a>
    </nav>

    <!--Contenido dinamico-->
    <header>
        @yield('apartado')
    </header>
</body>
</html>