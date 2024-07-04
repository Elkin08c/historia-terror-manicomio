import { Component, OnInit } from '@angular/core';
import { HistoriaterrorComponent } from "../../components/historiaterror/historiaterror.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [HistoriaterrorComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
