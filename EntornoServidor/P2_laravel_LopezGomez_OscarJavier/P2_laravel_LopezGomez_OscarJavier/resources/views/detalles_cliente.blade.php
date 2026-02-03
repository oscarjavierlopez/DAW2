@extends('plantilla')

@section('apartado')
<h2>Cliente: {{$cliente->nombre}}</h2>
<table>
    <thead>
            <tr>
                <th>Servicio</th>
                <th>fecha</th>
                <th>Hora</th>
                <th>estado</th>
                <th>Usuario</th>
            </tr>
        </thead>

        <tbody>
            @foreach ($cliente->citas as $cita) <!--Se ordenan en el modelo de Cliente-->
                <tr>
                    <td>{{ $cita->servicio->nombre }}</td>
                    <td>{{ $cita->fecha }}</td>
                    <td>{{ $cita->hora }}</td>
                    <td>{{ $cita->estado }}</td>
                    <td>{{ $cita->user->email }}</td>
                </tr>
            @endforeach
        </tbody>
</table>

<ul>
    <li><strong>Total de citas:</strong> {{count($cliente->citas)}}</li>
    <li><strong>Activas:</strong> {{count($cliente->citas->where('estado', 'activa'))}}</li>
    <li><strong>Canceladas:</strong> {{count($cliente->citas->where('estado', 'cancelada'))}}</li>
</ul>
@endsection
