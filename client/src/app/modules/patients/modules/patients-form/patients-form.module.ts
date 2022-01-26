import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsFormPopupComponent } from './components/patients-form-popup/patients-form-popup.component';
import { PatientsFormComponent } from './components/patients-form/patients-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';




@NgModule({
  declarations: [PatientsFormPopupComponent, PatientsFormComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatSlideToggleModule,
  ],
  exports: [
    PatientsFormPopupComponent, 
    PatientsFormComponent
  ]
})
export class PatientsFormModule { }
