(()=>{
    //Forma implicita;
    var varImplicita = "Hola";
    // varImplicita= 5;
    // varImplicita=true;
    // varImplicita={};
    // varImplicita=undefined;
    let unNumero :number = 2;
    varImplicita = 'Como estas?' + unNumero.toString();

    //Forma explicita;
    var varExplicita : string = "";
    varExplicita = `I'm Javier " 
    - Primer valor = ${varImplicita}
    .
    `
    var varSinTemplateString = "I'm Javier \n"+ 
    "\t- Primer valor = " +varImplicita +"\n"+
    ".\n"

    console.log(varExplicita);
    console.log(varSinTemplateString);
    //Leer guia enviada por prof seccion string :)

})();