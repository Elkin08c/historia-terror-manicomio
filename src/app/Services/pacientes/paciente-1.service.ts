import { Injectable } from "@angular/core";
import { paciente } from "../../models/paciente.model";

@Injectable({
    providedIn: 'root'
})
export class PacienteDiana{
    private person : paciente;

    constructor(){
        this.person = new paciente(
            'Diana',
            'paciente',
            'Sevilla',
        );
    }

    getPerson(): string{
        return `${this.person.name}`;
    }

    getRol(): string{
        return `${this.person.rol}`
    }

    getCity(): string{
        return `${this.person.city}`
    }
}