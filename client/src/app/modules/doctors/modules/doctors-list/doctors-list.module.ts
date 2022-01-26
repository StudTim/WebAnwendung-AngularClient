import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PatientsFormModule } from '../../../patients/modules/patients-form/patients-form.module';
import { ListModule } from '../../../list/list.module';
import { DoctorsFilterPipe } from '../../../list/common/pipes/doctors-filter.pipe';
import { DoctorsFormModule } from '../doctors-form/doctors-form.module';



@NgModule({
  declarations: [
    DoctorsListComponent,
    DoctorsFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    PatientsFormModule,
    ListModule,
    DoctorsFormModule,
  ],
  exports: [
    DoctorsListComponent,
    DoctorsFilterPipe
  ]
})
export class DoctorsListModule { }
