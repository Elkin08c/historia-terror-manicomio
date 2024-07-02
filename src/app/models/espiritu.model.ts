import { curioso } from "./curioso.model";

export class espiritu extends curioso{
    constructor(
        name: string,
        rol: string,
        city: string,
    ){
        super(name, rol, city);
    }

    dia1(){
        return `${this.name}Una noche tormentosa, mientras realizaba su ronda nocturna, Sarah escuchó un grito desgarrador proveniente del sótano. Al bajar las escaleras, encontró al Dr. Blackwood en medio de un círculo de velas, con un antiguo grimorio en sus manos y una expresión de terror en su rostro. Un vórtice de energía oscura giraba en el centro de la habitación.`
    }
}