import { Injectable } from "@angular/core";
import { investigador } from "../../models/investigador.model";

@Injectable({
    providedIn: 'root'
})
export class InvestigadorMario{
    private person : investigador;

    constructor (){
        this.person = new investigador(
            "Mario", 
            "Investigador", 
            "Andorra",
        );
    }

    getPerson(): string{
        return`${this.person.name}`
    }

    getRol(): string{
        return`${this.person.rol}`
    }

    getCity(): string{
        return`${this.person.city}`
    }

    fin2(): string{
        return`${this.person.fin2}`
    }
}