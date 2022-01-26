import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'underscore';
import { DoctorsRestService } from '../../../../common/service/doctors-rest.service';
import { DoctorsFormValidationService } from '../../common/service/doctors-form-validation.service';

@Component({
  selector: 'app-doctors-form-popup',
  templateUrl: './doctors-form-popup.component.html',
  styleUrls: ['./doctors-form-popup.component.scss']
})
export class DoctorsFormPopupComponent implements OnInit {

  constructor(
    public readonly doctorsFormValidationService: DoctorsFormValidationService,
    private readonly doctorsRestService: DoctorsRestService,
    private readonly dialogRef: MatDialogRef<DoctorsFormPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  public onSaveClicked(): void {
    this.doctorsRestService.create(this.doctorsFormValidationService.fields.value).subscribe((model) => {
      this.dialogRef.close();
    }, (error) => {
      console.log(error);
    });
  }

  public onAbortClicked(): void {

    this.dialogRef.close();
    _.defer(this.doctorsFormValidationService.reset.bind(this.doctorsFormValidationService));

  }

}
