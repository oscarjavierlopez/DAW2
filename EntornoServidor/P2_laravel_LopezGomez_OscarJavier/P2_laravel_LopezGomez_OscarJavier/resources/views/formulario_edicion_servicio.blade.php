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
            form input[type="number"],
            form select {
                padding: 0.7rem;
                border: 1px solid #ccc;
                border-radius: 6px;
                font-size: 1rem;
                transition: border-color 0.2s ease;
            }

            form input[type="text"]:focus,
            form input[type="number"]:focus,
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

            #mensaje {
                text-align: center;
                font-weight: bold;
            }
        </style>
    @endpush
    <form action="{{ route('servicios.editar', $servicio->id) }}" method="POST" id="agregar-cliente">
        @method('put')
        @csrf

        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value="{{ $servicio->nombre }}">
        @error('nombre')
            <div class="error">
                Por favor, rellena el nombre
            </div>
        @enderror

        <label for="duracion">Duración</label>
        <input type="number" id="duracion" name="duracion_minutos" value="{{ $servicio->duracion_minutos }}">
        @error('duracion')
            <div class="error">
                Por favor, rellena la duración correctamente
            </div>
        @enderror

        <label for="precio">Precio</label>
        <input type="number" step="any" id="precio" name="precio" placeholder="precio" min="1"
            value="{{ $servicio->precio }}">
        @error('precio')
            <div class="error">
                Por favor, rellena el precio en el formato correcto
            </div>
        @enderror

        <label for="activo">
            <input type="checkbox" id="activo" name="activo" {{ $servicio->activo == 1 ? 'checked' : '' }}>
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
