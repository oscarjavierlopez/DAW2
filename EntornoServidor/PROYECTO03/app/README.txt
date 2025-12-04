FUNCIONALIDAD CORRECTA:
En el fichero main hay creada una instancia de videoclub, dos instancias de clientes(socios) y dos instancias de soportes(un DVD y una CintaVideo).
En la prueba actual se ha probado la funcionalidad para que no se lancen excepciones. En ella se han incluido dos soportes en el videoclub y dos clientes.
En la prueba el socio numero 1 alquila dos soportes, devuelve uno de ellos y después el socio numero 2 alquila uno de los dos soportes.
Por pantalla se muestran el resumen de la cinta de videro, los socios, los productos, el número de alquileres actual y el número total de alquileres desde que se creó el videoclub.

PRUEBA DE EXCEPCIONES:
Debajo de la prueba de funcionalidad correcta se muestran varias pruebas de lanzamiento y tratamiento de excepciones:
+En la primera prueba se intenta alquilar un soporte no incluido en el videoclub
+En la segunda prueba se intenta alquilar un soporte ya alquilado
+En la tercera se intenta alquilar más soportes de los que tiene permitido el cliente(cupo superado)
+En la tercera se intenta devolver un producto existente con un cliente no registrado(Cliente no encontrado)