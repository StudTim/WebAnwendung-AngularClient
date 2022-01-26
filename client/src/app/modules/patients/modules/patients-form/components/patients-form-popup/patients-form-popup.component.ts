import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PatientRestService } from 'src/app/modules/patients/common/service/patient-rest.service';
import { PatientsFormValidationService } from '../../common/service/patients-form-validation.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-patients-form-popup',
  templateUrl: './patients-form-popup.component.html',
  styleUrls: ['./patients-form-popup.component.scss']
})
export class PatientsFormPopupComponent implements OnInit {

  constructor(
    public readonly patientsFormValidationService: PatientsFormValidationService,
    private readonly patientRestService: PatientRestService,
    private readonly dialogRef: MatDialogRef<PatientsFormPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  public onSaveClicked(): void {
    this.patientRestService.create(this.patientsFormValidationService.fields.value).subscribe((model) => {
      this.dialogRef.close();
    }, (error) => {
      console.log(error);
    });
  }

  public onAbortClicked(): void {

    this.dialogRef.close();
    _.defer(this.patientsFormValidationService.reset.bind(this.patientsFormValidationService));
    
  }

}
