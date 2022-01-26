import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SplitViewService } from 'src/app/common/service/split-view.service';
import { UiService } from 'src/app/common/service/ui.service';
import { INurseModel } from 'src/app/modules/nurses/common/model/i-nurse-model';
import { NursesRestService } from 'src/app/modules/nurses/common/service/nurses-rest.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-nurses-overview',
  templateUrl: './nurses-overview.component.html',
  styleUrls: ['./nurses-overview.component.scss']
})
export class NursesOverviewComponent implements OnInit {

  public selectedNurse: INurseModel = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public splitViewService: SplitViewService,
    public nursesRestService: NursesRestService,
    private uiService: UiService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedNurse = _.find(this.nursesRestService.items, { id: params.id } as INurseModel);
      if (this.selectedNurse !== null && this.selectedNurse !== undefined) {
        this.uiService.setPageTitle(`${this.selectedNurse.lastname} ${this.selectedNurse.firstname}`);
      }
    });

  }

  public ngAfterViewInit(): void {
    this.splitViewService.beginObservation();
  }

}
