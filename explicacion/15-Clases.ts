(()=>{
    //Clase: Es una plantilla o molde que nos permite crear (INSTANCIAR) objetos a partir de ella donde se replican sus variables internas(ATRIBUTOS), sus funciones internas (METODOS) y adicional cuano se instancia se ejecuta el constructor

    class nombreClase{
        nombreProf : string ;
        edadProf : number;
        profesionProf : string;

        saludar = ()=>{
            console.log("Hola a todos");
        }

        constructor(paramNombre : string, paramEdad : number, paramProfesion: string){
           this.nombreProf = paramNombre;
           this.edadProf = paramEdad;
           this.profesionProf = paramProfesion;
        }
    }

    var javierObjeto = new nombreClase("Julian",12,"Admin");

    console.log(javierObjeto.nombreProf);
    // javierObjeto.nombreProf = "iJavom";
    // console.log(javierObjeto.nombreProf);
    javierObjeto.saludar();
})();