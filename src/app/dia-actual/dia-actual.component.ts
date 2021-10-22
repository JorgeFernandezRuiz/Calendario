import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dia-actual',
  templateUrl: './dia-actual.component.html',
  styleUrls: ['./dia-actual.component.css']
})
export class DiaActualComponent  {
  @Input() diaActual?: Date;
  constructor() { }


}
