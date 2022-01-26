import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';
import { IDoctorModel } from '../../../../common/model/i-doctor-model';
import { DoctorsRestService } from '../../../../common/service/doctors-rest.service';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.scss']
})
export class DoctorsDetailsComponent implements OnInit {

  public doctor: IDoctorModel = {} as IDoctorModel;

  constructor(
    public doctorsRestService: DoctorsRestService,
    public activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.doctor = _.find(this.doctorsRestService.items, { id: params.id } as IDoctorModel);
    });
  }

}
