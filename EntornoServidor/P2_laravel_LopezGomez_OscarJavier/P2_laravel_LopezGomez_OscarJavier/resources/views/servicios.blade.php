@extends('plantilla')

@push('styles')
    <style>
        .addservicio {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
    </style>
@endpush

@section('apartado')
    <div class="addservicio">
        <h2>servicios</h2>
        <a href="{{ route('servicios.formulario') }}" class="botones">Añadir servicio</a>
    </div>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Duración</th>
                <th>Editar</th>
                <th>Borrar</th>
            </tr>
        </thead>

        <tbody>
            @foreach ($servicios as $servicio)
                <tr>
                    <td>{{ $servicio->nombre }}</td>
                    <td>{{ $servicio->precio }}</td>
                    <td>{{ $servicio->duracion_minutos }} mins</td>
                    <td><a href="{{ route('servicios.formulario.edicion', $servicio->id) }}" class="botones">Editar</a></td>
                    <td>
                        <form action="{{ route('servicios.eliminar', $servicio->id) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="botones">Borrar</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    {{ $servicios->links() }}
@endsection
