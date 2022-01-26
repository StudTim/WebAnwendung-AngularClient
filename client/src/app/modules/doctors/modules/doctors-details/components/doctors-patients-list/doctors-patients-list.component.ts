import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IDoctorModel } from 'src/app/modules/doctors/common/model/i-doctor-model';
import { DoctorsRestService } from 'src/app/modules/doctors/common/service/doctors-rest.service';
import { IPatientModel } from 'src/app/modules/patients/common/model/i-patient-model';
import { PatientsFormPopupComponent } from 'src/app/modules/patients/modules/patients-form/components/patients-form-popup/patients-form-popup.component';
import * as _ from 'underscore';
import { GlobalSearchService } from '../../../../../layout/common/service/global-search.service';
import { DoctorsPatientsRestService } from '../../../../common/service/doctors-patients-rest.service';

@Component({
  selector: 'app-doctors-patients-list',
  templateUrl: './doctors-patients-list.component.html',
  styleUrls: ['./doctors-patients-list.component.scss']
})
export class DoctorsPatientsListComponent implements OnInit {

  constructor(
    public doctorsRestService: DoctorsRestService,
    public doctorsPatientsRestService: DoctorsPatientsRestService,
    public activatedRoute: ActivatedRoute,
    public globalSearchService: GlobalSearchService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
  }

  public onAddClicked(): void {
    this.dialog.open(PatientsFormPopupComponent, { disableClose: true })
        .afterClosed().subscribe(this.cdr.markForCheck.bind(this.cdr));
  }
}
