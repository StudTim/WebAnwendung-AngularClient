import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { PatientsFormModule } from '../patients-form/patients-form.module';
import { ListModule } from '../../../list/list.module';
import { PatientsFilterPipe } from '../../../list/common/pipes/patients-filter.pipe';

@NgModule({
  declarations: [
    PatientsListComponent,
    PatientsFilterPipe
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    PatientsFormModule,
    ListModule,

  ],
  exports: [
    PatientsListComponent,
    PatientsFilterPipe
  ]
})
export class PatientsListModule { }
