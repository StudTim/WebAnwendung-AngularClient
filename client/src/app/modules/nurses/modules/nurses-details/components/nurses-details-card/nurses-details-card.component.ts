import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { INurseModel } from '../../../../common/model/i-nurse-model';
import { NursesRestService } from '../../../../common/service/nurses-rest.service';

@Component({
  selector: 'app-nurses-details-card',
  templateUrl: './nurses-details-card.component.html',
  styleUrls: ['./nurses-details-card.component.scss']
})
export class NursesDetailsCardComponent implements OnInit {

  public nurses: INurseModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    public nursesRestService: NursesRestService,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(this.onRouteParamsChange.bind(this));
  }

  private onRouteParamsChange(params): void {
    this.nurses = _.find(this.nursesRestService.items, { id: params.id } as INurseModel);
  }

}
