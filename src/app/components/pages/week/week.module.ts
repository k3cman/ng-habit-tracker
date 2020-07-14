import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week.component';
import {DateFormatModule} from '../../../pipes/date-format/date-format.module';
import {WeekSharedModule} from '../../shared/week-shared/week-shared.module';



@NgModule({
  declarations: [WeekComponent],
  imports: [
    CommonModule,
    DateFormatModule,
    WeekSharedModule
  ]
})
export class WeekModule { }
