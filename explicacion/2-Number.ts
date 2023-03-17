(()=>{
    var edad = 28;
    
    //edad = "No hay datos";//No Se puede asignar porque es un string
    console.log(edad);
    console.log(edad.toString());

    const costo : number = 100000;
    //costo = edad; //No se puede asignar porque es constante
    edad = costo;
    edad = parseFloat("Hola");
    console.log(isNaN(edad)); //isNaN nos permite validar si tiene un NaN (porque NaN es un numero)

})();