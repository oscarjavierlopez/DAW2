from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Persona
from django.shortcuts import redirect

def mi_primera_vista(request):
    return HttpResponse('<h1>Bienvenido</h1>')

def index(request):
    template = loader.get_template('mi_primera_template.html')
    return HttpResponse(template.render())

def listar_personas(request):
    personas = Persona.objects.all().values()
    template = loader.get_template('listar_personas.html')
    context = {
        'personas': personas,
    }
    return HttpResponse(template.render(context, request))

def crear_persona(request):
    template = loader.get_template('crear_persona.html')
    
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        apellido = request.POST.get('apellido')
        edad = request.POST.get('edad')
        dni = request.POST.get('dni')

        persona = Persona(nombre = nombre,
                          apellido = apellido,
                          edad = edad,
                          dni = dni)
        persona.save()
        return redirect('listar_personas')

    return HttpResponse(template.render({}, request))


    