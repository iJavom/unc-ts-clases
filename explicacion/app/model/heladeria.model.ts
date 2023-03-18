export default class Heladeria{
    nombre : string;
    capacidad : number;

    constructor(nombre?: string, capacidad?:number){
        this.nombre = nombre ?? "";
        this.capacidad = capacidad ?? 0;
    }
}