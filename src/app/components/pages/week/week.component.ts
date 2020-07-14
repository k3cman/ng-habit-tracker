import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  public startDate: Date;
  public endDate: Date;
  public daysOfTheWeek = [];
  constructor() { }

  ngOnInit() {
    this.getCurrentWeek();
  }

  public isLast(day) {
    return day === this.daysOfTheWeek[this.daysOfTheWeek.length - 1];
  }

  private getCurrentWeek() {
    const startDate = moment().startOf('isoWeek');
    const endDate = moment().endOf('isoWeek');
    this.startDate = startDate.toDate();
    this.endDate = endDate.toDate();
    this.daysOfTheWeek = [];

    let day = startDate;

    [...Array(7).keys()].forEach(e => {
      this.daysOfTheWeek.push(day.toDate());
      day = day.clone().add(1, 'day');
    });
  }


}
