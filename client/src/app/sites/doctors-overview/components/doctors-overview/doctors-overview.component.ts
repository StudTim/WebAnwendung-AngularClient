import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { SplitViewService } from '../../../../common/service/split-view.service';
import { UiService } from '../../../../common/service/ui.service';
import { IDoctorModel } from '../../../../modules/doctors/common/model/i-doctor-model';
import { DoctorsRestService } from '../../../../modules/doctors/common/service/doctors-rest.service';

@Component({
  selector: 'app-doctors-overview',
  templateUrl: './doctors-overview.component.html',
  styleUrls: ['./doctors-overview.component.scss']
})
export class DoctorsOverviewComponent implements OnInit {

  public selectedDoctor: IDoctorModel = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public splitViewService: SplitViewService,
    public doctorsRestService: DoctorsRestService,
    private uiService: UiService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedDoctor = _.find(this.doctorsRestService.items, { id: params.id } as IDoctorModel);
      if (this.selectedDoctor !== null && this.selectedDoctor !== undefined) {
        this.uiService.setPageTitle(`${this.selectedDoctor.lastname} ${this.selectedDoctor.firstname}`);
      }
    });

  }

  public ngAfterViewInit(): void {
    this.splitViewService.beginObservation();
  }

}
