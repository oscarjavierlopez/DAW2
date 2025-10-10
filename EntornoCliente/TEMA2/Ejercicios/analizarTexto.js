let texto = "Hola Óscar,Te escribo para confirmar la reunión del lunes. Puedes contactar a Marta en marta.gomez@empresa.com o a Luis en luis123@gmail.com si tienes dudas. También puedes llamar al +34 612345678 o al +34 698765432.Recuerda revisar los documentos en https://intranet.empresa.com/docs y también en http://recursos.dev para los últimos cambios. Si no puedes acceder, prueba con ftp://backup.empresa.com. Saludos,Carlos";
function analizarTexto(texto) {
    let regexCorreo = /[A-Za-z0-9\._-]+@[a-z]+\.[a-z]{2,5}/;
    let regexTlf = /6\d{8}/g;
    let regexhttp = /http:\/\/[A-Za-z0-9\.\/]+/;
    let regexhttps = /https:\/\/[A-Za-z0-9\.\/]+/;
    let regexftp = /ftp:\/\/[A-Za-z0-9\.\/]+/;

    if (regexCorreo.test(texto)) {
        console.log('El texto contiene al menos un correo electrónico');
    } else {
        console.log('El texto no contiene ningún correo electrónico');
    }

    let palabras = texto.split(/\.|\s|,/);
    console.log('Teléfonos encontrados:');
    for (palabra of palabras) {
        if (regexTlf.test(palabra)) {
            console.log("+34 " + palabra);
        }
    }
    

    if (regexftp.test(texto) || regexhttp.test(texto) || regexhttps.test(texto)) {
        if (regexftp.test(texto)) {
            let ftp = texto.match(regexftp);
            console.log('Hay una URL de tipo FTP: ' + ftp[0]);
        }
        if (regexhttp.test(texto)) {
            let http = texto.match(regexhttp)
            console.log('Hay una URL de tipo HTTP: ' + http[0]);
        }
        if (regexhttps.test(texto)) {
            let https = texto.match(regexhttps);
            console.log('Hay una URL de tipo HTTPS: ' + https[0]);
        }
    } else {
        console.log("No hay ninguna URL en el texto")
    }

}
analizarTexto(texto);

