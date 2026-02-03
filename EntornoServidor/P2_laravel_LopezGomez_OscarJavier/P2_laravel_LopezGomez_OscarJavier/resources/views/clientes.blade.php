@extends('plantilla')

@push('styles')
    <style>
        .addCliente {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
    </style>
@endpush

@section('apartado')
    <div class="addCliente">
        <h2>Clientes</h2>
        <a href="{{ route('clientes.formulario') }}" class="botones">Añadir Cliente</a>
    </div>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Detalles</th>
                <th>Editar</th>
                <th>Borrar</th>
            </tr>
        </thead>

        <tbody>
            @foreach ($clientes as $cliente)
                <tr>
                    <td>{{ $cliente->nombre }}</td>
                    <td>{{ $cliente->email }}</td>
                    <td>{{ $cliente->telefono }}</td>
                    <td><a href="{{ route('clientes.formulario.edicion', $cliente->id) }}" class="botones">Editar</a></td>
                    <td><a href="{{ route('detalles.cliente', $cliente->id) }}" class="botones">Ver detalles</a></td>
                    <td>
                        <form action="{{ route('clientes.eliminar', $cliente->id) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="botones">Borrar</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    {{ $clientes->links() }}
@endsection
