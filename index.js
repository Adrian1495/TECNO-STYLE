function mayoriaEdad(miApellido, miNombre, miEdad){
    console.log("Apellido y nombre:" + miApellido + ", " + miNombre);
    if (miEdad >= 18) {
    console.log("Es mayor de edad " + "(" + miEdad + ")");}
    else{
    console.log("No es mayor de edad " +"(" + miEdad + ")");}
    }

    var ape=prompt("Ingrese su Apellido");
    var nom=prompt("Ingrese su Nombre");
    var edad=parseInt(prompt("Ingrese su Edad"));


    mayoriaEdad(ape,nom,edad);
    
    console.log(typeof edad);