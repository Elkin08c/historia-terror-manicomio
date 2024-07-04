import { curioso } from "./curioso.model";

export class paciente extends curioso{
    constructor(
        name: string,
        rol: string,
        city: string,
    ){
        super(name, rol, city);
    }
}