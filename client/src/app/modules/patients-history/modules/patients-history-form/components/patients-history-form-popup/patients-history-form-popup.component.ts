import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRouteSnapshot } from '@angular/router';
import * as _ from 'underscore';
import { PatientHistoryRestService } from '../../../../common/service/patient-history-rest.service';
import { PatientsHistoryFormValidationService } from '../../common/service/patients-history-form-validation.service';

@Component({
  selector: 'app-patients-history-form-popup',
  templateUrl: './patients-history-form-popup.component.html',
  styleUrls: ['./patients-history-form-popup.component.scss']
})
export class PatientsHistoryFormPopupComponent implements OnInit {

  constructor(
    public readonly patientsHistoryFormValidationService: PatientsHistoryFormValidationService,
    private readonly patientHistoryRestService: PatientHistoryRestService,
    private readonly dialogRef: MatDialogRef<PatientsHistoryFormPopupComponent>,
    private route: ActivatedRouteSnapshot,
  ) { }

  ngOnInit(): void {
  }

  public onSaveClicked(): void {
    this.patientHistoryRestService.create(this.route.params.id ,this.patientsHistoryFormValidationService.fields.value).subscribe((model) => {
      this.dialogRef.close();
    }, (error) => {
      console.log(error);
    });
  }

  public onAbortClicked(): void {

    this.dialogRef.close();
    _.defer(this.patientsHistoryFormValidationService.reset.bind(this.patientsHistoryFormValidationService));

  }

}
