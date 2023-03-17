(()=>{
    //Forma Implicita
    let varBool = true; 
    //Formas de booleanos true / false / null / undefined
    //Aunque TS nos limita que no deberiamos usar null ni undefined al menos que se lo especifiquemos
    varBool = isNaN(2);
    //varBool = "Hola";
    //varBool = null;
    console.log(varBool);

    //Forma Explicita
    let varBoolExp : boolean; //Donde no le inicializamos el valor
    

})();