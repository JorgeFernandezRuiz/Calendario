import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grid-dias',
  templateUrl: './grid-dias.component.html',
  styleUrls: ['./grid-dias.component.css']
})
export class GridDiasComponent {
  @Output() currentDate:EventEmitter<Date> = new EventEmitter<Date>();
  @Input() date:Date = new Date();
  today : number;
  dayOne :Date = new Date();
  dates  = new Array<Date>();
  days = new Array<String>('L','M','X','J','V','S','D');
  constructor() {
    this.dayOne = this.date;
    this.dayOne.setDate(1);
    this.setCalendarDays(this.dayOne);
    this.today = new Date().getDate();
  }

  private getFirstMonday(d:Date): Date {
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  private setCalendarDays(d: Date) {
    var firstDay = this.getFirstMonday(d);
    this.dates.push(firstDay);
    for (var i = 0; i< 41; i++){
      this.dates.push(this.getNextDay(this.dates[this.dates.length-1]));
    }
    console.log(this.dates)
  }
  getNextDay(d:Date){
    let dia = new Date(d);
    dia.setDate(dia.getDate()+1);
    return dia;
  }

  setCurrentDate(item: Date) {
    this.currentDate.emit(item);
  }
}
