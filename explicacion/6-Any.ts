(()=>{
    //los tipos any se declaran de manera explicita y sirven para saltarse cualquier filtrado de tipo
    var varAny : any= 1;
    varAny="Lo que sea";
    varAny=false;
    varAny=["hola"];
    varAny={};
    varAny = null;
    varAny = undefined;
    varAny = Symbol("Hola");
})();