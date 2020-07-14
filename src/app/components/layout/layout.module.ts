import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material';



@NgModule({
  declarations: [LayoutComponent, SidebarComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class LayoutModule { }
