(()=>{
    //con parametros
    var funcionPrueba = (a:number, b:number)=>{
        console.log(a+b);
    };


    funcionPrueba(1,2);
    //parametros opcionales
    var funcionOpcionalParam = (param1:string, param2:string, param3?:string) =>{
        console.log("Me ejecute sin problemas"); 
    }

    funcionOpcionalParam("a","b","c");

    //Cuando declaramos una funcion de manera implicita sin un return automaticamente lo toma como un void y si tiene un return asumira el tipo de ese return
    var funcionEjemploImplicita = () =>{
        console.log("Cumpli el motivo el motivo de mi existencia");
        return "Ya no soy el motivo de mi existencia"; 
    }

    //Para declararlo explicitamente podemos decir que cuando terminen los parametros ponemos ": el_tipo"
    var funcionEjemploExplicitaVoid = ():void => {

    }

    var funcionEjemploExplicitaString = ():string => {
        let res : string = "otro valor"
        return res;
    }

    var necesitoElMensaje = funcionEjemploExplicitaString();

    var funcionImplementacionOptionalChaining  = (paramString : string | null):void => {
        let necesitoUnString: string = paramString?.toLowerCase() || "";       
    }
})();