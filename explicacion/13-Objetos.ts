(()=>{
    //Objetos: Variable compleja que puede almacenar internamente mas variables. Las variables en este caso las llamaremos atributos y las funciones internas de este objeto la llamaremos metodos.
    //Declaraciones implicitas
    var ejemploObjeto = new Object(); //Muy raro no se tiende a usar
    var ejemploObjetoV2 = {
        color : "rojo",
        ruedas : 5,
        arrancar : ()=>{
            console.log("rum rum");
            return "arranque";
        }
    }

    //Declaraciones explicitas
    var ejemploObjetoE : object = new Object(); //Tampoco se usa mucho (se usa pero con clases)
    var ejemploObjetoV2E : {
        color: string,
        ruedas:number,
    } = {
        color : "azul",
        ruedas : 2
    }

    var soyUnaFuncion = (objectParam :{ nombre: string, edad: number, raza?: string } ):void=>{
        console.log(objectParam.nombre);
        console.log(objectParam);
        console.log(objectParam.raza ?? "no hay");
    };
    //false
    // ""
    //0
    //null
    //undefined
    soyUnaFuncion({nombre:"Sasha",edad:7, raza : ""});

})();