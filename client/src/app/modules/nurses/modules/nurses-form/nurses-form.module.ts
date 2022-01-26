import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesFormComponent } from './components/nurses-form/nurses-form.component';
import { NursesFormPopupComponent } from './components/nurses-form-popup/nurses-form-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    NursesFormComponent,
    NursesFormPopupComponent
  ],
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
    NursesFormComponent,
    NursesFormPopupComponent
  ]
})
export class NursesFormModule { }
