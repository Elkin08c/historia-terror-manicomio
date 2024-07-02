export class curioso {
    constructor(
        public name: string,
        public rol: string,
        public city: string,
    ){}

    introText(): string{
        return `${this.city},En las profundidades de un valle brumoso, la ciudad de Ravenholm se alzaba como un monumento a tiempos más prósperos. 
        Sus edificios victorianos, ahora desgastados por el tiempo, proyectaban largas sombras sobre las calles adoquinadas. El Hospital General de Ravenholm, 
        una imponente estructura de piedra gris, dominaba el centro de la ciudad.`
    }

    dia2(): string{
        return `El Dr. Ethan Blackwood, un hombre de ciencia con una curiosidad que rayaba en la obsesión, había llegado a Ravenholm hacía apenas un año`
        }

    dia3(): string{
        return ` Su reputación como cirujano brillante le precedía, pero pocos conocían su verdadera pasión: la experimentación con lo sobrenatural. `
    }

    dia4(){
        return `En el sótano del hospital, lejos de miradas indiscretas, el Dr. Blackwood había establecido un laboratorio secreto donde mezclaba ciencia y ocultismo en busca de la clave de la inmortalidad.`
    }

    dia5(){
        return `Sarah Thompson, una enfermera dedicada y compasiva, llevaba años trabajando en el hospital. `
    }

    dia6(){
        return `Aunque admiraba la habilidad del Dr. Blackwood, algo en él la inquietaba. Sus largas ausencias y su comportamiento errático la habían llevado a sospechar que ocultaba algo.`
    }

    dia7(){
        return ` ${this.name},Una noche tormentosa, mientras realizaba su ronda nocturna, Sarah escuchó un grito desgarrador proveniente del sótano.`
    }

    fin1(){
        return `Al bajar las escaleras, encontró al Dr. Blackwood en medio de un círculo de velas, con un antiguo grimorio en sus manos y una expresión de terror en su rostro.`
    }

    fin2(){
        return ` ${this.name},Un vórtice de energía oscura giraba en el centro de la habitación.
"¡Lo he liberado!", gritó el doctor antes de desmayarse en ${this.city}`
    }
}

export class espiritu extends curioso {
    override fin1(): string{
        return `Al bajar las escaleras, encontró al Dr. Blackwood en medio de n círculo de velas, con un antiguo grimorio en sus manos y una expresión de terror en su rostro.`
    }
}