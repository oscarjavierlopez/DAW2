<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/clientes', [PagesController::class, 'clientes'])->name('clientes');
    Route::get('/clientes/crear', [PagesController::class, 'formulario_creacion_cliente'])->name('clientes.formulario');
    Route::post('/clientes', [PagesController::class, 'crear_cliente'])->name('clientes.crear');
    Route::delete('/clientes/{id}', [PagesController::class, 'eliminar_cliente'])->name('clientes.eliminar');
    Route::get('/clientes/editar/{id}', [PagesController::class, 'formulario_edicion_cliente'])->name('clientes.formulario.edicion');
    Route::put('/clientes/{id}', [PagesController::class, 'editar_cliente'])->name('clientes.editar');

    Route::get('/cliente/{id}', [PagesController::class, 'detalles_cliente'])->name('detalles.cliente');


    Route::get('/servicios', [PagesController::class, 'servicios'])->name('servicios');
    Route::get('/servivios/crear', [PagesController::class, 'formulario_creacion_servicio'])->name('servicios.formulario');
    Route::post('/servicios', [PagesController::class, 'crear_servicio'])->name('servicios.crear');
    Route::delete('/servicios/{id}', [PagesController::class, 'eliminar_servicio'])->name('servicios.eliminar');
    Route::get('/servicios/editar/{id}', [PagesController::class, 'formulario_edicion_servicio'])->name('servicios.formulario.edicion');
    Route::put('/servicios/{id}', [PagesController::class, 'editar_servicio'])->name('servicios.editar');

    Route::get('/citas', [PagesController::class, 'citas'])->name('citas');
    Route::get('/citas/crear', [PagesController::class, 'formulario_creacion_cita'])->name('citas.formulario');
    Route::post('/citas', [PagesController::class, 'crear_cita'])->name('citas.crear');
    Route::get('/citas/editar/{id}', [PagesController::class, 'formulario_edicion_cita'])->name('citas.formulario.edicion');
    Route::put('/citas/{id}', [PagesController::class, 'editar_cita'])->name('citas.editar');
});

require __DIR__.'/auth.php';
