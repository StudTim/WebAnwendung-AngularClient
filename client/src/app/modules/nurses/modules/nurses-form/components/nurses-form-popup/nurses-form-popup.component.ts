import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'underscore';
import { NursesRestService } from '../../../../common/service/nurses-rest.service';
import { NursesFormValidationService } from '../../common/service/nurses-form-validation.service';

@Component({
  selector: 'app-nurses-form-popup',
  templateUrl: './nurses-form-popup.component.html',
  styleUrls: ['./nurses-form-popup.component.scss']
})
export class NursesFormPopupComponent implements OnInit {

  constructor(
    public readonly nursesFormValidationService: NursesFormValidationService,
    private readonly nursesRestService: NursesRestService,
    private readonly dialogRef: MatDialogRef<NursesFormPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  public onSaveClicked(): void {
    this.nursesRestService.create(this.nursesFormValidationService.fields.value).subscribe((model) => {
      this.dialogRef.close();
    }, (error) => {
      console.log(error);
    });
  }

  public onAbortClicked(): void {

    this.dialogRef.close();
    _.defer(this.nursesFormValidationService.reset.bind(this.nursesFormValidationService));

  }

}
