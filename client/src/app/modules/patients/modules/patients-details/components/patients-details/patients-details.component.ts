import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPatientModel } from 'src/app/modules/patients/common/model/i-patient-model';
import { PatientRestService } from 'src/app/modules/patients/common/service/patient-rest.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.scss']
})
export class PatientsDetailsComponent implements OnInit {

  public patient: IPatientModel = {} as IPatientModel;

  constructor(
    public patientRestService: PatientRestService,
    public activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.patient = _.find(this.patientRestService.items, {id: params.id} as IPatientModel);
    });
  }

}
