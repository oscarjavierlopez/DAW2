<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use App\Models\Cliente;
use App\Models\Servicio;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function clientes()
    {
        $clientes = Cliente::paginate(5);
        return view('clientes', compact('clientes'));
    }

    public function formulario_creacion_cliente()
    {
        return view('formulario_creacion_cliente');
    }

    public function crear_cliente(Request $request)
    {
        $cliente = new Cliente();

        $request->validate([
            'nombre'   => ['required', 'string'],
            'email'    => ['required', 'email', 'unique:clientes,email'],
            'telefono' => ['nullable', 'string', 'regex:/^\d{9}$/']
        ]);

        $cliente->nombre = $request->nombre;
        $cliente->email = $request->email;
        $cliente->telefono = $request->telefono;
        $cliente->activo = $request->has('activo') ? 1 : 0;

        $cliente->save();
        return back()->with('mensaje', 'cliente añadido correctamente');
    }

    public function eliminar_cliente($id)
    {
        $cliente = Cliente::find($id);
        $cliente->delete();
        return back();
    }

    public function formulario_edicion_cliente($id)
    {
        $cliente = Cliente::find($id);
        return view('formulario_edicion_cliente', compact('cliente'));
    }

    public function editar_cliente(Request $request, $id)
    {
        $request->validate([
            'nombre'   => ['required', 'string'],
            'email'    => ['required', 'email'],
            'telefono' => ['nullable', 'string', 'regex:/^\d{9}$/']
        ]);

        $cliente = Cliente::find($id);
        $cliente->nombre = $request->nombre;
        $cliente->email = $request->email;
        $cliente->telefono = $request->telefono;
        $cliente->activo = $request->has('activo') ? 1 : 0;

        $cliente->save();
        return back()->with('mensaje', 'cliente actualizado correctamente');
    }

    public function servicios()
    {
        $servicios = Servicio::paginate(5);
        return view('servicios', compact('servicios'));
    }

    public function formulario_creacion_servicio()
    {
        return view('formulario_creacion_servicio');
    }

    public function crear_servicio(Request $request)
    {
        $servicio = new Servicio();

        $request->validate([
            'nombre'   => ['required', 'string'],
            'precio'    => ['required', 'numeric', 'gt:0'],
            'duracion_minutos' => ['required', 'numeric', 'gt:0']
        ]);

        $servicio->nombre = $request->nombre;
        $servicio->duracion_minutos = $request->duracion_minutos;
        $servicio->precio = $request->precio;
        $servicio->activo = $request->has('activo') ? 1 : 0;

        $servicio->save();
        return back()->with('mensaje', 'servicio añadido correctamente');
    }

    public function eliminar_servicio($id)
    {
        $servicio = Servicio::find($id);
        $servicio->delete();
        return back();
    }

    public function formulario_edicion_servicio($id)
    {
        $servicio = Servicio::find($id);
        return view('formulario_edicion_servicio', compact('servicio'));
    }

    public function editar_servicio(Request $request, $id)
    {
        $request->validate([
            'nombre'   => ['required', 'string'],
            'precio'    => ['required', 'numeric', 'gt:0'],
            'duracion_minutos' => ['required', 'numeric', 'gt:0']
        ]);

        $servicio = Servicio::find($id);
        $servicio->nombre = $request->nombre;
        $servicio->duracion_minutos = $request->duracion_minutos;
        $servicio->precio = $request->precio;
        $servicio->activo = $request->has('activo') ? 1 : 0;

        $servicio->save();
        return back()->with('mensaje', 'servicio actualizado correctamente');
    }

    public function citas()
    {
        $citas = User::where('email', session('email'))->first()->citas;
        return view('citas', compact('citas'));
    }

    public function formulario_creacion_cita()
    {
        $clientes = Cliente::all();
        $servicios = Servicio::where('activo', 1)->get();
        return view('formulario_creacion_cita', compact('clientes', 'servicios'));
    }

    public function crear_cita(Request $request)
    {
        $request->validate([
            'cliente'   => ['required', 'string'],
            'servicio'   => ['required', 'string'],
            'hora' => ['required', 'date_format:H:i'],
            'fecha' => [
                'required',
                'date',
                /*Laravel validation closure*/
                function ($attribute, $value, $fail) use ($request) { //Validacion de fecha y hora pasada
                    $fecha_actual = strtotime(date("Y-m-d H:i"));
                    if (strtotime($request->fecha . " " . $request->hora) < $fecha_actual) {
                        $fail('La fecha y la hora no pueden ser pasadas');
                    }
                },

                function ($attribute, $value, $fail) use ($request) { //validacion de solape
                    $citasCliente = Cliente::find($request->cliente)->citas;
                    foreach ($citasCliente as $cita) {
                        if ($cita->fecha === $request->fecha && substr($cita->hora, 0, 5) === $request->hora) {
                            $fail('No están permitidos los solapes');
                            break;
                        }
                    }
                }
            ],
            'estado'    => ['required', 'string', 'in:activa,cancelada'],
            'notas' => ['nullable', 'string']
        ]);

        $cita = new Cita();
        $cita->cliente_id =  $request->cliente;
        $cita->user_id = User::where('email', session('email'))->first()->id;
        $cita->servicio_id =  $request->servicio;
        $cita->fecha = $request->fecha;
        $cita->hora = $request->hora;
        $cita->estado = $request->estado;
        $cita->notas = $request->notas;

        $cita->save();
        return back()->with('mensaje', 'cita añadida correctamente');
    }

    public function formulario_edicion_cita($id)
    {
        $cita = Cita::find($id);
        $clientes = Cliente::all();
        $servicios = Servicio::where('activo', 1)->get();
        return view('formulario_edicion_cita', compact('cita', 'clientes', 'servicios'));
    }

    public function editar_cita(Request $request, $id)
    {
        $request->validate([
            'cliente'   => ['required', 'string'],
            'servicio'   => ['required', 'string'],
            'hora' => ['required', 'date_format:H:i'],
            'fecha' => [
                'required',
                'date',
                function ($attribute, $value, $fail) use ($request) {
                    $fecha_actual = strtotime(date("Y-m-d H:i"));
                    if (strtotime($request->fecha . " " . $request->hora) < $fecha_actual) {
                        $fail('La fecha y la hora no pueden ser pasadas');
                    }
                },

                function ($attribute, $value, $fail) use ($request, $id) {
                    $citasCliente = Cliente::find($request->cliente)->citas;
                    foreach ($citasCliente as $cita) {
                        if ($cita->id != $id && $cita->fecha === $request->fecha && substr($cita->hora, 0, 5) === $request->hora) {
                            $fail('No están permitidos los solapes');
                            break;
                        }
                    }
                }
            ],
            'estado'    => ['required', 'string', 'in:activa,cancelada'],
            'notas' => ['nullable', 'string']
        ]);

        $cita = Cita::find($id);
        $cita->cliente_id =  $request->cliente;
        $cita->user_id = User::where('email', session('email'))->first()->id;
        $cita->servicio_id =  $request->servicio;
        $cita->fecha = $request->fecha;
        $cita->hora = $request->hora;
        $cita->estado = $request->estado;
        $cita->notas = $request->notas;

        $cita->save();
        return back()->with('mensaje', 'cita actualizada correctamente');
    }

    public function detalles_cliente($id)
    {
        $cliente = Cliente::find($id);
        return view('detalles_cliente', compact('cliente'));
    }
}
