import {NgModule} from '@angular/core';
import {TransformDayPipe} from './transform-day.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TransformDayPipe],
  exports: [TransformDayPipe],
  imports: [CommonModule]
})
export class TransformDayModule {}
