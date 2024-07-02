import { curioso } from "./curioso.model";

export class enfermera extends curioso{
    constructor(
        name: string,
        rol: string,
        city: string,
    ){
        super(name, rol, city);
    }

    dia1(){
        return `${this.name}Sarah Thompson, una enfermera dedicada y compasiva, 
        llevaba años trabajando en el hospital. 
        Aunque admiraba la habilidad del Dr. Blackwood, algo en él la inquietaba. 
        Sus largas ausencias y su comportamiento errático la habían llevado a sospechar que ocultaba algo.    `
    }
}