from django.db import models

class Persona(models.Model): #hereda de models.Model
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    edad = models.IntegerField(null=True)
    dni = models.CharField(max_length=9, primary_key=True)