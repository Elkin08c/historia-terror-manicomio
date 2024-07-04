import { Component, OnInit } from '@angular/core';
import { Curioso } from '../../Services/curiosos/curioso-1.service';
import { DoctorAlexander } from '../../Services/doctores/doctor-2.service';
import { DoctorEnrique } from '../../Services/doctores/doctor-1.service';
import { EnfermeraMargarita } from '../../Services/enfermeras/enfermera-1.service';
import { EnfermeraMarianita } from '../../Services/enfermeras/enfermera-2.service';
import { EspirituArmando } from '../../Services/espiritus/espiritu-1.service';
import { EsprituPaquito } from '../../Services/espiritus/espiritu-2.service';
import { GuardianEsteban } from '../../Services/guardianes/guardian-1.service';
import { GuardianPablo } from '../../Services/guardianes/guardian-2.service';
import { InvestigadorMario } from '../../Services/investgadores/investigador-1.service';
import { InvestigadorMartita } from '../../Services/investgadores/investigador-2.service';
import { InvestigadorPamela } from '../../Services/investgadores/investigador-3.service';
import { PacienteDiana } from '../../Services/pacientes/paciente-1.service';
import { PacienteMajito } from '../../Services/pacientes/paciente-2.service';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { curioso } from '../../models/curioso.model';
import { doctor } from '../../models/doctor.model';
import { enfermera } from '../../models/enfermera.model';
import { espiritu } from '../../models/espiritu.model';
import { guardian } from '../../models/guardian.model';
import { investigador } from '../../models/investigador.model';
import { paciente } from '../../models/paciente.model';
@Component({
  selector: 'app-historiaterror',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzListModule,
    NzGridModule
  ],
  templateUrl: './historiaterror.component.html',
  styleUrl: './historiaterror.component.css'
})
export class HistoriaterrorComponent  implements OnInit{

  person!: curioso;

  introMessage!: string;

  dia1Message!: string;
  dia2Message!: string;
  dia3Message!: string;
  dia4Message!: string;
  dia5Message!: string;
  dia6Message!: string;
  dia7Message!: string;

  fin1Message!: string;
  fin2Message!: string;

  nameJuanPerez!: string;
  nameAlexander!: string;
  nameEnrique!: string;
  nameMargarita!: string;
  nameMarianita!: string;
  nameArmando!: string;
  namePaquito!: string;
  nameEsteban!: string;
  namePablo!: string;
  nameMario!: string;
  nameMartita!: string;
  namePamela!: string;
  nameDiana!: string;
  nameMajito!: string;

  rolJuanPerez!: string;
  rolAlexander!: string;
  roleEnrique!: string;
  rolMargarita!: string;
  rolMarianita!: string;
  rolArmando!: string;
  rolPaquito!: string;
  rolEsteban!: string;
  rolPablo!: string;
  rolMario!: string;
  rolMartita!: string;
  rolPamela!: string;
  rolDiana!: string;
  rolMajito!: string;

  
  cityJuanPerez!: string;
  cityAlexander!: string;
  cityeEnrique!: string;
  cityMargarita!: string;
  cityMarianita!: string;
  cityArmando!: string;
  cityPaquito!: string;
  cityEsteban!: string;
  cityPablo!: string;
  cityMario!: string;
  cityMartita!: string;
  cityPamela!: string;
  cityDiana!: string;
  cityMajito!: string;


  sections = ['intro', 'development','fin']
  currentIndex = 0;

  next(){
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex ++;
  }
}

prev(){
  if (this.currentIndex > 0) {
    this.currentIndex --;
    }
  }

  constructor(
    private curioso: Curioso,
    private doctorEnrique: DoctorEnrique,
    private doctorAlexander: DoctorAlexander,
    private enfermeraMargarita: EnfermeraMargarita,
    private enfermeraMarianita: EnfermeraMarianita,
    private espirituArmando: EspirituArmando,
    private espirituPaquito: EsprituPaquito,
    private guardianEsteban: GuardianEsteban,
    private guardianPablo: GuardianPablo,
    private investigadorMario: InvestigadorMario,
    private investigadorMartita: InvestigadorMartita,
    private investigadorPamela: InvestigadorPamela,
    private pacienteDiana: PacienteDiana,
    private pacienteMajito: PacienteMajito,
  ){ }
  ngOnInit(): void {

    this.introMessage = this.curioso.introText();

    this.dia1Message = this.enfermeraMargarita.dia1();
    this.dia2Message = this.curioso.dia2();
    this.dia3Message = this.curioso.dia3();
    this.dia4Message = this.curioso.dia4();
    this.dia5Message = this.curioso.dia5();
    this.dia6Message = this.curioso.dia6();
    this.dia7Message = this.curioso.dia7();

    this.fin1Message = this.curioso.fin1();
    this.fin2Message = this.investigadorMario.fin2();

    this.nameJuanPerez = this.curioso.getPerson();
    this.nameEnrique = this.doctorEnrique.getPerson();
    this.nameAlexander = this.doctorAlexander.getPerson();
    this.nameMargarita = this.enfermeraMargarita.getPerson();
    this.nameMarianita = this.enfermeraMarianita.getPerson();
    this.nameArmando = this.espirituArmando.getPerson();
    this.namePaquito = this.espirituPaquito.getPerson();
    this.nameEsteban = this.guardianEsteban.getPerson();
    this.namePablo = this.guardianPablo.getPerson();
    this.nameMario = this.investigadorMario.getPerson();
    this.nameMartita = this.investigadorMartita.getPerson();
    this.namePamela = this.investigadorPamela.getPerson();
    this.nameDiana = this.pacienteDiana.getPerson();
    this.nameMajito = this.pacienteMajito.getPerson();

    this.rolJuanPerez = this.curioso.getRol();
    this.roleEnrique = this.doctorEnrique.getRol();
    this.rolAlexander = this.doctorAlexander.getRol();
    this.rolMargarita = this.enfermeraMargarita.getRol();
    this.rolMarianita = this.enfermeraMarianita.getRol();
    this.rolArmando = this.espirituArmando.getRol();
    this.rolPaquito = this.espirituPaquito.getRol();
    this.rolEsteban = this.guardianEsteban.getRol();
    this.rolPablo = this.guardianPablo.getRol();
    this.rolMario = this.investigadorMario.getRol();
    this.rolMartita = this.investigadorMartita.getRol();
    this.rolPamela = this.investigadorPamela.getRol();
    this.rolDiana = this.pacienteDiana.getRol();
    this.rolMajito = this.pacienteMajito.getRol();
  }

}