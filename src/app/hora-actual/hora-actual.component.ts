import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hora-actual',
  templateUrl: './hora-actual.component.html',
  styleUrls: ['./hora-actual.component.css']
})
export class HoraActualComponent  {
  @Input() date:Date|null = null;
  constructor() { }


}
