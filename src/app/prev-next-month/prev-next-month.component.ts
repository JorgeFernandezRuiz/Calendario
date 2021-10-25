import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-prev-next-month',
  templateUrl: './prev-next-month.component.html',
  styleUrls: ['./prev-next-month.component.css']
})
export class PrevNextMonthComponent implements OnInit {
  @Input() tipo: string='';
  @Output() currentMonth = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick($event: MouseEvent) {
    console.log($event)
    debugger
    // if ($event && $event.target.querySelector('span').classList.value ==='prevMonth'){
    //
    // }
  }
}
