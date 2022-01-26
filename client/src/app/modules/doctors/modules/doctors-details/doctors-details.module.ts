import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsDetailsComponent } from './components/doctors-details/doctors-details.component';
import { DoctorsPatientsListComponent } from './components/doctors-patients-list/doctors-patients-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { DoctorsDetailsCardComponent } from './components/doctors-details-card/doctors-details-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ListModule } from '../../../list/list.module';



@NgModule({
  declarations: [
    DoctorsDetailsComponent,
    DoctorsDetailsCardComponent,
    DoctorsPatientsListComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTabsModule,
    ListModule,
  ],
  exports: [
    DoctorsDetailsComponent,
    DoctorsPatientsListComponent,
  ]
})
export class DoctorsDetailsModule { }
