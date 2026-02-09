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

            form input[type="date"],
            form input[type="time"],
            form select {
                padding: 0.7rem;
                border: 1px solid #ccc;
                border-radius: 6px;
                font-size: 1rem;
                transition: border-color 0.2s ease;
            }

            form input[type="date"]:focus,
            form input[type="time"]:focus,
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
    <form action="{{ route('citas.editar', $cita->id) }}" method="POST" id="agregar-cliente">
        @method('put')
        @csrf

        <label for="cliente">Cliente:</label>
        <select name="cliente" id="cliente">
            @foreach ($clientes as $cliente)
                <option value="{{ $cliente->id }}" {{ $cliente->id === $cita->cliente_id ? 'selected' : '' }}>
                    {{ $cliente->nombre }}</option>
            @endforeach
        </select>

        <label for="servicio">Servicio:</label>
        <select name="servicio" id="servicio">
            @foreach ($servicios as $servicio)
                <option value="{{ $servicio->id }}" {{ $servicio->id === $cita->servicio_id ? 'selected' : '' }}>
                    {{ $servicio->nombre }}</option>
            @endforeach
        </select>

        <label for="fecha">Fecha</label>
        <input type="date" name="fecha" id="fecha" value="{{ $cita->fecha }}">
        @error('fecha')
            <div class="error">
                {{ $message }} <!--$message es el mensaje que viene del fail-->
            </div>
        @enderror

        <label for="hora">Hora</label>
        <input type="time" name="hora" id="hora" value="{{ substr($cita->hora, 0, 5) }}">
        @error('hora')
            <div class="error">
                Por favor, introduce una hora válida
            </div>
        @enderror

        <label for="estado">Estado:</label>
        <select name="estado" id="estado" value="{{ $cita->estado }}">
            <option value="activa">activa</option>
            <option value="cancelada">cancelada</option>
        </select>

        <label for="notas">Notas</label>
        <textarea name="notas" id="notas" cols="30" rows="10">{{ $cita->notas }}</textarea>
        @error('notas')
            <div class="error">
                Las notas no pueden tener más de 255 carcateres
            </div>
        @enderror

        <input type="submit" value="Enviar">


        @if (session('mensaje'))
            <div id="mensaje">
                {{ session('mensaje') }}
            </div>
        @endif
    </form>
@endsection
