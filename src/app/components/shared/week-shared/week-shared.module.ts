import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeekDayComponent} from './week-day/week-day.component';
import {DateFormatModule} from '../../../pipes/date-format/date-format.module';
import {WeekRepeatableWrapperComponent} from './week-repeatable-wrapper/week-repeatable-wrapper.component';
import {TransformDayModule} from '../../../pipes/transform-day/transform-day.module';


@NgModule({
  declarations: [WeekDayComponent, WeekRepeatableWrapperComponent],
  exports: [
    WeekDayComponent
  ],
  imports: [
    CommonModule,
    DateFormatModule,
    TransformDayModule,
  ]
})
export class WeekSharedModule { }
