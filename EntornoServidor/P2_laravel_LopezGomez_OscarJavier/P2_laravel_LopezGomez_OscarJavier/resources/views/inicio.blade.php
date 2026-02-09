@extends('plantilla')

@push('styles')
    <style>
        .estadisticas li{
            font-weight: 900;
        }

        .estadisticas span{
            font-weight: normal;
        }
    </style>
@endpush

@section('apartado')
    <ul class="estadisticas">
        <li>Número total de citas: <span>{{count($citas)}}</span></li>
        <li>Número de citas activas: <span>{{count($citas_activas)}}</span></li>
        <li>Número de citas canceladas: <span>{{count($citas_canceladas)}}</span></li>
        <li>Número de clientes activos: <span>{{count($clientes_activos)}}</span></li>
        <li>Número de servicios activos: <span>{{count($servicios_activos)}}</span></li>
    </ul>
@endsection
