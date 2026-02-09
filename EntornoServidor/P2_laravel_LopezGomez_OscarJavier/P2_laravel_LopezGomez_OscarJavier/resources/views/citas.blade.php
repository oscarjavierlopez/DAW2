@extends('plantilla')

@push('styles')
    <style>
        form {
            padding: 0 30px
        }

        .addCita {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
    </style>
@endpush

@section('apartado')
    @if (request()->cookie('hora'))
        <form method="GET">
            <input type="time" name="hora" value="{{ request()->cookie('hora') }}">
            <button type="submit">Filtrar</button>
        </form>
    @else
        <form method="GET">
            <input type="time" name="hora">
            <button type="submit">Filtrar</button>
        </form>
    @endif

    <div class="addCita">
        <h2>Citas</h2>

        <div class="redirect">
            <a href="{{ route('citas.formulario') }}" class="botones">Añadir Cita</a>
            <a href="{{ route('citas.semana_actual') }}" class="botones">citas semana actual</a>
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>fecha</th>
                <th>Hora</th>
                <th>estado</th>
                <th>Notas</th>
                <th>editar</th>
            </tr>
        </thead>

        <tbody>
            @foreach ($citas as $cita)
                <tr>
                    <td>{{ $cita->cliente->nombre }}</td>
                    <td>{{ $cita->servicio->nombre }}</td>
                    <td>{{ $cita->fecha }}</td>
                    <td>{{ $cita->hora }}</td>
                    <td>{{ $cita->estado }}</td>
                    <td>{{ strlen($cita->notas) > 0 ? $cita->notas : 'Sin notas' }}</td>
                    <td><a href="{{ route('citas.formulario.edicion', $cita->id) }}" class="botones">Editar</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
