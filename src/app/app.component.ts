import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'Calendario';
  date: Date = new Date();
  currentDate: Date = this.date;
  private timer:any;
  PREV: string="PREV";
  NEXT: string="NEXT";
  ngOnInit(): void {
    this.startTimer(this.date);
  }

  setCurrentDate(date: Date) {
    this.currentDate = date;
  }

  startTimer(date:Date){
    this.timer = setInterval(() => {
      this.date =new Date();
    }, 1000);
  }
  stopTimer(){
    clearInterval(this.timer);
  }

  setCurrentMonth($event: any) {

  }
}
