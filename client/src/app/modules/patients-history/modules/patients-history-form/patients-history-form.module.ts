import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsHistoryFormPopupComponent } from './components/patients-history-form-popup/patients-history-form-popup.component';
import { PatientsHistoryFormComponent } from './components/patients-history-form/patients-history-form.component';



@NgModule({
  declarations: [PatientsHistoryFormPopupComponent, PatientsHistoryFormComponent],
  imports: [
    CommonModule
  ]
})
export class PatientsHistoryFormModule { }
