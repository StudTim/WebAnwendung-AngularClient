import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPatientModel } from 'src/app/modules/patients/common/model/i-patient-model';
import { SplitViewService } from 'src/app/common/service/split-view.service';
import { PatientRestService } from 'src/app/modules/patients/common/service/patient-rest.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-patients-details-card',
  templateUrl: './patients-details-card.component.html',
  styleUrls: ['./patients-details-card.component.scss']
})
export class PatientsDetailsCardComponent implements OnInit {

  public patient: IPatientModel;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private splitViewService: SplitViewService,
    public patientRestService: PatientRestService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(this.onRouteParamsChange.bind(this));
  }

  private onRouteParamsChange(params): void {
    this.patient = _.find(this.patientRestService.items, { id: params.id } as IPatientModel);
  }
}
