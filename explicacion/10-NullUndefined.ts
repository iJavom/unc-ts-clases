(()=>{
    //Null o Undefined deben ser declaradas explicitamente
    var unaVariableNula : null = null;
    var unaVariableIndefinida : undefined = undefined;
    //unaVariableNula = 4; //no va a aceptar nada que no sea null
    
    let unEjemploVar : number | null;
    unEjemploVar = null;

    

    var unaVariableObjeto : {
        nombre : string ;
        edad : number | null;
    } = { 
        nombre : "Javier Vargas",
        edad : 28
    };
    unaVariableObjeto.nombre = '';

    var edadParticipante : number | null;
    var edadSinNulos : number | null;
    //"?" (Optional Chaining), Permite validar si nuestro atributo es null o undefined;
    edadParticipante = unaVariableObjeto?.edad || 0;

    //"!" Esto indica que el atributo de un objeto no va a venir null o undefined ; 

    edadSinNulos = unaVariableObjeto!.edad;
    
})();