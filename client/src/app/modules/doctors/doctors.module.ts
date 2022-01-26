import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListModule } from './modules/doctors-list/doctors-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DoctorsListModule,
  ],
  exports: [
    DoctorsListModule,
  ]
})
export class DoctorsModule { }
