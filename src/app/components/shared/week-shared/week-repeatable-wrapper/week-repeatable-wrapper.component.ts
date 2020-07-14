import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-week-repeatable-wrapper',
  templateUrl: './week-repeatable-wrapper.component.html',
  styleUrls: ['./week-repeatable-wrapper.component.scss']
})
export class WeekRepeatableWrapperComponent implements OnInit {
  @Input() day: Date;
  constructor() { }

  ngOnInit() {
  }

}
