import { Injectable } from "@angular/core";
import { doctor } from "../../models/doctor.model";

@Injectable({
    providedIn: 'root'
})
export class DoctorAlexander{
    private person : doctor;

    constructor(){
        this.person = new doctor(
            'Alexander', 
            'Doctor', 
            'Barcelona', 
        );
    }

    getPerson(): string {
        return `${this.person.name}`
    }

    getRol(): string {
        return `${this.person.rol}`
    }

    getCity(): string {
        return `${this.person.city}`
    }
}