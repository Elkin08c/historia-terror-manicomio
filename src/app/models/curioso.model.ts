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
        return ` ${this.name},Entonces, las sombras se materializaron en formas grotescas y los espectros emergieron de las sombras. Gritos de angustia llenaron el aire mientras los jóvenes corrían en pánico por los pasillos ahora distorsionados y retorcidos. Pero era demasiado tarde.
        La última imagen que quedó grabada en sus mentes fue la de un rostro pálido y sin ojos que los observaba desde la oscuridad antes de que el asilo se desvaneciera en una niebla negra. 
        Nunca se encontraron rastros de los jóvenes valientes, pero se dice que sus voces todavía susurran entre las sombras, advirtiendo a los curiosos de no desafiar el sueño eterno de los que yacen en el asilo maldito en ${this.city}`
    }
}

export class investigador extends curioso {
    override fin1(): string{
        return `En las profundidades del oscuro bosque, rodeado de árboles retorcidos y silenciosos, 
        se alzaba el antiguo asilo maldito. 
        Sus paredes de piedra grisácea parecían susurrar historias de sufrimiento y desesperación. 
        Durante décadas, las leyendas sobre almas perdidas y espectros atormentados habían mantenido alejados a los lugareños, hasta que un grupo de jóvenes audaces decidió desafiar el tabú.
        Guiados por la curiosidad y la adrenalina, ingresaron al asilo en una noche de luna llena. A medida que avanzaban por los pasillos cubiertos de polvo y sombras, 
        comenzaron a escuchar susurros lejanos y risas desgarradoras que parecían provenir de la nada. Luces intermitentes iluminaban brevemente figuras borrosas que desaparecían en las esquinas.`
    }
}