import { curioso } from "./curioso.model";

export class guardian extends curioso{
    constructor(
        name: string,
        rol: string,
        city: string,
    ){
        super(name, rol, city);
    }

    initHisroty(): string{
        return `En las profundidades de un valle brumoso, la ciudad de Ravenholm se alzaba como un monumento a tiempos más prósperos. 
        Sus edificios victorianos, ahora desgastados por el tiempo, 
        proyectaban largas sombras sobre las calles adoquinadas. El Hospital General de Ravenholm, una imponente estructura de piedra gris, dominaba el centro de la ciudad.`
    }}