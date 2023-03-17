(()=>{
    //Los unions types se declaran de forma implicita;
    let variableConVariosTipos : string | number;
    variableConVariosTipos = 1;
    variableConVariosTipos = "Un string";
    //variableConVariosTipos = false; //Solo admite string o number
})();