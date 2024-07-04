import { Injectable } from "@angular/core";
import { enfermera } from "../../models/enfermera.model";

@Injectable({
    providedIn: 'root'
})
export class EnfermeraMarianita{
    private person : enfermera;

    constructor(){
        this.person = new enfermera(
            'Marianita', 
            'Enfermera',
            'Marsella',
        );
    }

    getPerson(): string{
        return `${this.person.name}`
    }

    getRol(): string{
        return `${this.person.rol}`
    }

    getCity(): string{
        return `${this.person.city}`
    }

    dia1(): string{
        return this.person.dia1();
    }

}