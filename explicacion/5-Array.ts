(()=>{
    //Forma implicita
    let unArray = [1,2,3,4,5,"hola soy un infiltrado",true]; //En la forma implicita podemos declarar los tipos que queramos
    unArray = [1,2,true];

    //Forma Explicita;
    let formaUno : number[];
    let formaUnoV2 : string[][]; //Un Array de dos dimensiones y podemos agregarle mas dimensiones con solo ir añadiendo "[]"
    let formaDos : Array<string> = [];
    let formaDosV2 : Array<Array<string>> = [];
    //formaUno=["hola"]; //Solo numeros
    formaUno = [999,888];
    formaUno[0]; //Recordando que 0 es la primera posicion de un array en TS (tambien para JS)
    //formaDos = [true]; //Solo string
    formaDos = ["Hola"];

    let formaUnoVariosTypes : (number | string)[] = [];
    let formaDosVariosTypes : Array<number | string>;
    //Alerta no es necesario entender todavia
    console.log(formaUno.find((element)=> element = 999 ));
})();