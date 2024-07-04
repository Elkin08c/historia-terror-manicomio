import { Injectable } from "@angular/core";
import { guardian } from "../../models/guardian.model";

@Injectable({
    providedIn: "root"
})
export class GuardianPablo{
    private person : guardian;

    constructor(){
        this.person = new guardian(
            'Pablo', 
            'Guardian', 
            'Monaco',
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