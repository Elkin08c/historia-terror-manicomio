import { Injectable } from "@angular/core";
import { doctor } from "../../models/doctor.model";

@Injectable({
    providedIn: 'root'
})
export class DoctorEnrique{
    private person : doctor;

    constructor(){
        this.person = new doctor(
            'Enrique', 
            'doctor',
            'Estocolmo',
        );
    }

    getPerson(): string{
        return `${this.person.name}`;
    }

    getRol(): string{
        return `${this.person.rol}`;
    }

    getCity(): string{
        return `${this.person.city}`;
    }

}