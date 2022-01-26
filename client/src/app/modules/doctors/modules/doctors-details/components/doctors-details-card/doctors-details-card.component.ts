import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';
import { IDoctorModel } from '../../../../common/model/i-doctor-model';
import { DoctorsRestService } from '../../../../common/service/doctors-rest.service';

@Component({
  selector: 'app-doctors-details-card',
  templateUrl: './doctors-details-card.component.html',
  styleUrls: ['./doctors-details-card.component.scss']
})
export class DoctorsDetailsCardComponent implements OnInit {

  public doctors: IDoctorModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    public doctorsRestService: DoctorsRestService,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(this.onRouteParamsChange.bind(this));
  }

  private onRouteParamsChange(params): void {
    this.doctors = _.find(this.doctorsRestService.items, { id: params.id } as IDoctorModel);
  }

}
