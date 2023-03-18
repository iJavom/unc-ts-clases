(() => {
  //Interfaces, son como contratos que nos permiten asignarle una forma a los objetos

  //Anteriormente para definir una forma usabamos el type
  type objetoEjemplo = {
    saborGalleta: string;
    saborCrema: string;
  };
  //con la interfaz nosotros lo vamos a definir ahora asi
  interface objetoHelado {
    saborGalleta: string;
    saborCrema: string;
  } 
  var osoHelados: objetoEjemplo;
  var pinguiHelados: objetoHelado;

  //Type se usan mas como para valores primitivos o especificos;
  osoHelados = {saborCrema :"vainilla" , saborGalleta: "waffle" };

  pinguiHelados = { saborCrema: "chocolate" , saborGalleta: "waffle" };

  //extends : Es la capacidad que tiene una interfaz de heredar de otra interfaz

  interface objetoMalteadas extends  objetoHelado {
    topping? : string,
    readonly id : number;
  }
  //podemos declarar opcionales poniendo el simbolo de pregunta (?)
  //podemos edclarar un atributo de solo lectura anteponiendo al nombre de la variable readonly
  var malteadaChocolate : objetoMalteadas = {
    id : 1,
    topping : "Sirop de chocolate",
    saborCrema : "Chocolate",
    saborGalleta : "Oreo",
  }

    //   //Si habilitamos este codigo nos mostrara error porque son atributos de solo lectura (readonly)
    //   malteadaChocolate.id = 2;
    //   malteadaChocolate["id"] = 2;

})();
