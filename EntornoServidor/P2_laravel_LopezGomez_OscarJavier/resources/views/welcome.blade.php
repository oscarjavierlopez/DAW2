@extends('plantilla')
{{-- Fichero welcome.blade.php desarrollado por Óscar Javier López Gómez.
 Muestra una bienvenida. Es el único fichero al que se puede acceder sin estar loggeado.--}}
@push('styles')
    <style>
        h2{
            text-align: center;
        }
    </style>
@endpush"
@section('apartado')
<h2>Bienvenido a mi app de citas</h2>
@endsection
