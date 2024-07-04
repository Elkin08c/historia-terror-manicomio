import { Injectable } from "@angular/core";
import { guardian } from "../../models/guardian.model";

@Injectable({
    providedIn: "root"
})
export class GuardianEsteban{
    private person : guardian;

    constructor(){
        this.person = new guardian(
            'Esteban', 
            'Guardian', 
            'Mayorca',
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