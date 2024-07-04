import { Injectable } from "@angular/core";
import { espiritu } from "../../models/espiritu.model";

@Injectable({
    providedIn: 'root'
})
export class EspirituArmando{
    private person : espiritu;

    constructor(){
        this.person = new espiritu(
            'Armando',
            'Espiritu',
            'Ahorcamiento',
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

}