import { Injectable } from "@angular/core";
import { espiritu } from "../../models/espiritu.model";

@Injectable({
    providedIn: 'root'
})
export class EsprituPaquito {
    private person : espiritu;

    constructor(){
        this.person = new espiritu(
            'Paquito',
            'Espiritu',
            'Ahogado',
        );
    }

    getPerson(): string{
        return this.person.name;
    }

    getRol(): string{
        return this.person.rol;
    }

    getCity(): string{
        return this.person.city;
    }

}