import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsFormComponent } from './components/doctors-form/doctors-form.component';
import { DoctorsFormPopupComponent } from './components/doctors-form-popup/doctors-form-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [DoctorsFormComponent, DoctorsFormPopupComponent],
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
    DoctorsFormComponent,
    DoctorsFormPopupComponent,
  ]
})
export class DoctorsFormModule { }
