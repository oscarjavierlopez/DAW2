function esContraseñaSegura(contraseña){
    let long = contraseña.length;
    let w = /\w/.test(contraseña);
    let especial = /!@#\$%\^&\*/.test(contraseña);
    if(contraseña.length >= 8 && /\w/.test(contraseña) && /[!@#\$%\^&\*]/.test(contraseña)){
        return true;
    }else{
        return false;
    }
}
console.log(esContraseñaSegura("Hola123%%"));
console.log(esContraseñaSegura("hola"));
