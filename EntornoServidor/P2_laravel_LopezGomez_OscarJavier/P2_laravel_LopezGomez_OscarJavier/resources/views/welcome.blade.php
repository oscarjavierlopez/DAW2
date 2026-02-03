<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome</title>
    <style>
        body{
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            gap: 5px;
        }

        a{
            border-radius: 10px;
            padding: 10px;
            background-color: black;
            color: white;
            text-decoration: none;
        }

        a:hover{
            background-color: rgb(68, 65, 65);
        }

    </style>
</head>
<body>
    <a href="{{ route('login') }}">Iniciar Sesión</a>
    <a href="{{ route('register') }}">Registrarse</a>
</body>
</html>
