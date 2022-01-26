import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesListModule } from './modules/nurses-list/nurses-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NursesListModule,
  ],
  exports: [
    NursesListModule,
  ]
})
export class NursesModule { }
