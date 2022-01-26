import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { INurseModel } from '../../../../common/model/i-nurse-model';
import { NursesRestService } from '../../../../common/service/nurses-rest.service';

@Component({
  selector: 'app-nurses-details',
  templateUrl: './nurses-details.component.html',
  styleUrls: ['./nurses-details.component.scss']
})
export class NursesDetailsComponent implements OnInit {

  public nurse: INurseModel = {} as INurseModel;

  constructor(
    public nursesRestService: NursesRestService,
    public activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.nurse = _.find(this.nursesRestService.items, { id: params.id } as INurseModel);
    });
  }

}
