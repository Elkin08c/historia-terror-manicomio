import { curioso } from "./curioso.model";

export class espiritu extends curioso{
    constructor(
        name: string,
        rol: string,
        city: string,
    ){
        super(name, rol, city);
    }
}