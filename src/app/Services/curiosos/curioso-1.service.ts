import {Injectable} from '@angular/core';
import { curioso} from '../../models/curioso.model';
import { investigador } from '../../models/curioso.model';

@Injectable({
    providedIn: 'root'
})
export class Curioso {
    private person : curioso;

    constructor(){
        this.person = new curioso(
            'Juan Perez',
            'Curiso de lugar',
            'Malvinas'
            );
    }

    getPerson(): string{
        return `${this.person.name}`;
    }

    getRol(): string {
        return `${this.person.rol}`
    }

    introText(): string {
        return this.person.introText();
    }

    dia2(): string{
        return this.person.dia2();
    }

    dia3(): string{
        return this.person.dia3();
    }

    dia4(): string{
        return this.person.dia4();
    }

    dia5(): string{
        return this.person.dia5();
    }

    dia6(): string{
        return this.person.dia6();
    }

    dia7(): string{
        return this.person.dia7();
    }

    fin1(): string{
        return this.person.fin1();
    }
}

export class Investigador {
    private person : investigador;

    constructor(){
        this.person = new investigador(
            'Juan Perez',
            'Espiritu',
            'Malvinas',
        );
    }

    getPerson(): string{
        return `${this.person.name}`;
    }

    getRol(): string {
        return `${this.person.rol}`
    }

    introText(): string {
        return this.person.introText();
    }

    dia2(): string{
        return this.person.dia2();
    }

    dia3(): string{
        return this.person.dia3();
    }

    dia4(): string{
        return this.person.dia4();
    }

    dia5(): string{
        return this.person.dia5();
    }

    dia6(): string{
        return this.person.dia6();
    }

    dia7(): string{
        return this.person.dia7();
    }

    fin1(): string{
        return this.person.fin1();
    }
}

