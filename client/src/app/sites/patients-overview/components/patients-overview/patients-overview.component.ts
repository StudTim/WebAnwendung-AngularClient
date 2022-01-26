import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { SplitViewService } from '../../../../common/service/split-view.service';
import { UiService } from '../../../../common/service/ui.service';
import { IPatientModel } from '../../../../modules/patients/common/model/i-patient-model';
import { PatientRestService } from '../../../../modules/patients/common/service/patient-rest.service';

@Component({
  selector: 'app-patients-overview',
  templateUrl: './patients-overview.component.html',
  styleUrls: ['./patients-overview.component.scss']
})
export class PatientsOverviewComponent implements OnInit {

  public selectedPatient: IPatientModel = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public splitViewService: SplitViewService,
    public patientRestService: PatientRestService,
    private uiService: UiService
  ) { }


  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedPatient = _.find(this.patientRestService.items, { id: params.id } as IPatientModel);
      if (this.selectedPatient !== null && this.selectedPatient !== undefined) {
        this.uiService.setPageTitle(`${this.selectedPatient.lastname} ${this.selectedPatient.firstname}`);
      }
    });

  }

  public ngAfterViewInit(): void {
    this.splitViewService.beginObservation();
  }

}
