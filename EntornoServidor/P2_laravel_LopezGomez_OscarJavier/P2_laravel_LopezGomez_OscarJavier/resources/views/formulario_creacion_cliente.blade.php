@extends('plantilla')

@section('apartado')
    @push('styles')
        <style>
            form#agregar-cliente {
                max-width: 500px;
                margin: 2rem auto;
                padding: 2rem;
                background: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                display: flex;
                flex-direction: column;
                gap: 1rem;
                font-family: Arial, sans-serif;
            }

            form label {
                font-weight: bold;
                margin-bottom: 0.3rem;
                color: #333;
            }

            form input[type="text"],
            form input[type="email"],
            form select {
                padding: 0.7rem;
                border: 1px solid #ccc;
                border-radius: 6px;
                font-size: 1rem;
                transition: border-color 0.2s ease;
            }

            form input[type="text"]:focus,
            form input[type="email"]:focus,
            form select:focus {
                border-color: #0b0b0b;
                outline: none;
                box-shadow: 0 0 4px rgba(255, 109, 0, 0.3);
            }

            form input[type="checkbox"] {
                margin-right: 0.5rem;
            }

            form#agregar-cliente input[type="submit"] {
                background: #000;
                color: white;
                padding: 0.8rem;
                border: none;
                border-radius: 6px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                transition: background 0.2s ease;
            }

            form#agregar-cliente input[type="submit"]:hover {
                background: #e65f00;
            }

            .error {
                color: red;
                font-weight: bold;
            }

            #mensaje{
                text-align: center;
                font-weight: bold;
            }
        </style>
    @endpush
    <form action="{{ route('clientes.crear') }}" method="POST" id="agregar-cliente">
        @csrf

        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="nombre">
        @error('nombre')
            <div class="error">
                Por favor, rellena el nombre
            </div>
        @enderror

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="email">
        @error('email')
            <div class="error">
                Por favor, rellena el email
            </div>
        @enderror

        <label for="telefono">Telefono</label>
        <input type="text" id="telefono" name="telefono" placeholder="telefono">
        @error('telefono')
            <div class="error">
                Por favor, rellena el telefono en el formato correcto
            </div>
        @enderror

        <label for="activo">
            <input type="checkbox" id="activo" name="activo">
            Activo</label>
        @error('activo')
            <div class="error">
                Por favor, rellena el campo activo con un valor válido
            </div>
        @enderror

        <input type="submit" value="Enviar">
    </form>

    @if (session('mensaje'))
        <div id="mensaje">
            {{ session('mensaje') }}
        </div>
    @endif
@endsection
