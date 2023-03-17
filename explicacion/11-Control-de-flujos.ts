(()=>{
    //Controles de flujos en TS (Repaso de JS porque aplican los mismos)
    //If 
    var a = 5 ;
    if (a == 5){ 
        console.log("Entre en el if");
    }
    if (a==3) 
    console.log("Entre primera linea "); //Solo se ejecuta la proxima linea porque no tiene llaves
    console.log("Entre Segunda linea");

    //IF/ELSE
    var segundaVariable = "Hola";
    if(segundaVariable == "adios"){
        console.log("X");
    }else{
        console.log("Entro aqui");
    }
    //Ejemplo con funcion
    if(isNaN(NaN)){ 
        console.log("A");
    }else{
        console.log("B");
    }
    console.log("------------")
    //Ejemplo con algo indefinido
    if(undefined){
        console.log("A-UNDEFINED");
    }else{
        console.log("B-UNDEFINED");
    }
    //En el control del flujo podemos usar variables booleanas, operaciones booleanas, funciones que retornen un booleano, variables si se encuentra definidas o con un valor distinto de null
    //Si la variable/objeto tiene null, undefined o false sera interpretado como que no se cumple
    //Si la variable/objeto tiene valor o es true se interpreta como se cumple

    //Operador terniario "?:"
    //El operador terniario es como un if/else pero con una sintaxis distinta
    //donde primero tenemos la operacion booleana () luego "?" , el valor en caso de cumplirse luego se usa el ":" para indicar el else y la instruccion caso de no cumplirse y se cierra con ;
    console.log("--------operador terniario");
    var unaVariableBooleana = true;

    // (unaVariableBooleana) ? console.log("Me ejecute porque me cumplo") : console.log("No me ejecute");

    console.log("--------operador terniario asignando valor");
    var unaNota = 20;
    var estado : string;
    estado = unaNota > 50 ? "Aprobado" : "Reprobado";
    console.log(estado);
    //Volvemos a las 8:20;

    //if/else if / else

    console.log("--------Ejemeplo if / else if /else");
    var temperatura = 0;
    if(temperatura < 15){
        console.log("Hace frio");
    }else if (temperatura >= 15 && temperatura <= 20){
        console.log("Esta fresco");
    }else if(temperatura > 20 && temperatura <=25){
        console.log("Esta calido");
    }else{
        console.log("Hace calor");
    }

    //Switch case
    console.log("--------Ejemeplo switch case");
    var notaUniversidad = 9;
    switch(notaUniversidad){
        case 10:
            console.log("Sobresaliente");
            break;
        case 9:
        case 8:
        case 7:
            console.log("Bien");
            break;
        case 6:
        case 5:
            console.log("Aprobado");
            break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprobado");
            break;
        default:
            console.log("Nota erronea");
            break;
    };

    //while
    //Se va ejecutar el codigo siempre y cuando se cumpla la condicion que funciona bajo los mismos terminos de un if
    var contador = 0
    while(contador < 10){
        console.log(contador);
        //Formas de aumentar en 1
        contador++;
        //contador = contador + 1;
        //contador += 1;
    }
    //do while
    //Se ve a ejecutar por lo menos una vez y si se cumple la condicion se sigue ejecutando que funciona bajo los mismos terminos de un if
    do{
        console.log("Me ejecute la primera vez");
    }while(contador< 10);

    //for 
    //es un bucle que a partir de una variable se va a ejecutar siempre que se cumpla lo establecido en el 2do parametro e ira incrementando en base al tercer parametro
    for(let i:number=0; i <5;i++){
        console.log(i);
    }

    //for .. in //Se vera mas adelante 
    //for .. of // que tambien se vera mas adelante
    //Array functions (que son las funciones que trabajan con array)

})();