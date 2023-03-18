//Exportaciones para poder mandar nuestro codigo a otros archivos
//Se antepone la palabra class a lo que queremos exportar
export type tiposEstandar = "Amanecer" | "Dia" | "Atardecer" | "Noche" | number;

export   interface objetoHelado {
    saborGalleta: string;
    saborCrema: string;
  } 

export  class nombreClase{
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

export type razasPerritos = "Husky" | "Pitbull" | "Labrador";