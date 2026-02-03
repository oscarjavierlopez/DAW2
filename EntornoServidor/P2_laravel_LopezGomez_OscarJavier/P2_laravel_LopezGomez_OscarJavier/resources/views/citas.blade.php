@extends('plantilla')

@push('styles')
    <style>
        .addCita {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
    </style>
@endpush

@section('apartado')
    <div class="addCita">
        <h2>Citas</h2>
        <a href="{{ route('citas.formulario') }}" class="botones">Añadir Cita</a>
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
                    <td>{{ $cita->notas }}</td>
                    <td><a href="{{ route('citas.formulario.edicion', $cita->id) }}" class="botones">Editar</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
